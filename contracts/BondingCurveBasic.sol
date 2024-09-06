// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

import "./nil/Nil.sol";
import "./nil/NilCurrencyBase.sol";

// TODO: use SafeMath

contract BondingCurveBasic is NilCurrencyBase {  // TODO: make interface for handle different type of curves
    using Nil for address;

    uint256 public poolBalance;
    uint256 public immutable maxTotalSupply;
    uint256 public constant curveExponent = 2;
    uint256 public constant initialPricePerToken = 1e3;
    
    // For debugging
    event ToPurchaseAmount(address indexed sender, uint256 indexed deposit, uint256 indexed amount);
    event SuccessfulyMinted(address indexed sender, uint256 indexed deposit, uint256 indexed amount);
    event DidSendAsyncCall(address indexed sender, uint256 indexed deposit, uint256 indexed amount);

    constructor(string memory _tokenName, uint _maxTotalSupply) {
        maxTotalSupply = _maxTotalSupply;
        setCurrencyNameInternal(_tokenName);
    }

    function buy(address _destination) external payable {
        uint256 deposit = msg.value; 
        require(deposit > 0, "Empty deposit");
        require(getCurrencyTotalSupply() < maxTotalSupply, "All tokenes are already purchased");  // TODO: use modifiers?

        uint256 mintAmount = calculateBuyPrice(deposit);
        emit ToPurchaseAmount(msg.sender, deposit, mintAmount);

        if (getCurrencyTotalSupply() + mintAmount > maxTotalSupply) {
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
            0,  // value
            purchasedTokens, // tokens
            "" // callData
        );
    }

    function sell(uint256 _amount, address _destination) external payable {
        require(getCurrencyBalanceOf(msg.sender) >= _amount, "Insufficient balance");
        uint256 reimbursement = calculateSellPrice(_amount);

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

    // TODO: tune formulas
    // Exponential curve for buying tokens: P(x) = k * x^e
    // Where x is totalSupply, e is the curve exponent, and k is a multiplier for scaling the curve.
    function calculateBuyPrice(uint256 ethAmount) public view returns (uint256) {
        uint256 tokenSupply = getCurrencyTotalSupply();

        if (tokenSupply == 0) {
            // Price for the first tokens
            return ethAmount / initialPricePerToken;
        }
        // P(x) = k * x^e => tokens = ETH / (k * (currentSupply ^ e))
        return ethAmount / (tokenSupply ** curveExponent);
    }

    // Exponential curve for selling tokens: Similar logic for selling based on the supply and reserve.
    function calculateSellPrice(uint256 tokenAmount) public view returns (uint256) {
        uint256 tokenSupply = getCurrencyTotalSupply();
        // P(x) = k * x^e => ETH = tokens * (k * (currentSupply ^ e))
        return (tokenAmount * poolBalance) / (tokenSupply ** curveExponent);
    }

    function burnCurrencyInternal(uint256 amount) internal {
        // TODO: should be implemented in NilCurrencyBase later
    }

}
