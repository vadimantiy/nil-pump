// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

import "./nil/Nil.sol";
import "./nil/NilCurrencyBase.sol";

// TODO: use SafeMath

contract BondingCurveBasic is NilCurrencyBase {  // TODO: make interface for handle different type of curves
    using Nil for address;

    uint256 poolBalance;
    uint256 cap;
    uint256 constant public decimals = 10**4;
    
    event ToPurchaseAmount(address indexed sender, uint256 indexed deposit, uint256 indexed amount);
    event SuccessfulyMinted(address indexed sender, uint256 indexed deposit, uint256 indexed amount);
    event DidSendAsyncCall(address indexed sender, uint256 indexed deposit, uint256 indexed amount);

    receive() external payable {}

    constructor(string memory _tokenName, uint _cap) {
        cap = _cap;
        setCurrencyNameInternal(_tokenName);
    }

    function buy(address _destination) external payable {
        uint256 deposit = msg.value; 
        require(deposit > 0, "Empty deposit");
        require(getCurrencyTotalSupply() < cap, "All tokenes are already purchased");  // TODO: use modifiers?

        uint256 mintAmount = calculateCurvedMintReturn(deposit);

        emit ToPurchaseAmount(msg.sender, deposit, mintAmount);

        if (getCurrencyTotalSupply() + mintAmount > cap) {
            // TODO: handle this case, buy proportionally
        }

        mintCurrencyInternal(mintAmount);

        emit SuccessfulyMinted(msg.sender, deposit, mintAmount);

        poolBalance += deposit;

        Nil.Token[] memory purchasedTokens = new Nil.Token[](1);
        purchasedTokens[0] = Nil.Token({
            id: uint256(uint160(address(this))),
            amount: mintAmount
        });

        Nil.asyncCall(  // TODO: think of exact correct parameters
            _destination,  // dst
            address(this),  // refundTo
            address(msg.sender),  // bounceTo
            100000,  // feeCredit
            0,  // forwardKind
            false,  // deploy
            12345,  // value
            purchasedTokens, // tokens
            "" // callData
        );
    }

    function sell(uint256 _amount, address _destination) external payable {
        require(getCurrencyBalanceOf(msg.sender) >= _amount, "Insufficient balance");
        uint256 reimbursement = calculateCurvedBurnReturn(_amount);

        burnCurrencyInternal(reimbursement);
        poolBalance -= reimbursement;

        Nil.asyncCall(    // TODO: think of exact correct parameters
            _destination,  // dst
            address(msg.sender),  // refundTo
            address(msg.sender),  // bounceTo
            100000,  // feeCredit
            0,  // forwardKind
            false,  // deploy
            reimbursement,  // value
            ""  // callData
        );
    }

    function calculateCurvedMintReturn(uint256 _amount)
        public view returns (uint256 mintAmount)
    {
        return calculatePurchaseReturn(getCurrencyTotalSupply(), poolBalance, _amount);
    }

    function calculateCurvedBurnReturn(uint256 _amount)
        public view returns (uint256 mintAmount)
    {
        return calculateSaleReturn(getCurrencyTotalSupply(), poolBalance,  _amount);
    }

    function calculatePurchaseReturn(
        uint256 _totalSupply,
        uint256 _poolBalance,
        uint256 _amount
    )   public
        pure
        returns (uint256)
    {
        // TODO: get correct formula
        uint256 newTotal = _totalSupply + _amount;
        uint256 newPrice = newTotal * newTotal / decimals * newTotal / decimals;
        return newPrice / 3 - _poolBalance;
    }

    function calculateSaleReturn(
        uint256 _totalSupply,
        uint256 _poolBalance,
        uint256 _amount
    )   public
        pure
        returns (uint256)
    {
        // TODO: get correct formula
        uint256 newTotal = _totalSupply - _amount;
        uint256 newPrice = newTotal * newTotal / decimals * newTotal / decimals;
        return _poolBalance - newPrice / decimals;
    }

    function burnCurrencyInternal(uint256 amount) internal {
        // TODO: should be implemented in NilCurrencyBase later
    }

}
