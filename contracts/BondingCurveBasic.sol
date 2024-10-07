// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.19;

import "@nilfoundation/smart-contracts/contracts/Nil.sol";
import "@nilfoundation/smart-contracts/contracts/NilCurrencyBase.sol";

contract BondingCurveBasic is NilCurrencyBase {
    using Nil for address;

    uint256 public poolBalance;
    uint256 public immutable maxTotalSupply;
    uint256 public constant curveExponent = 2;
    uint256 public constant initialPricePerToken = 1e3;
    uint256 public constant MAX_POOL_BALANCE = 10 ether;

    bool public isCurveClosed = false;
    
    // For debugging
    event ToPurchaseAmount(address indexed sender, uint256 indexed deposit, uint256 indexed amount);
    event SuccessfulyMinted(address indexed sender, uint256 indexed deposit, uint256 indexed amount);
    event DidSendAsyncCall(address indexed sender, uint256 indexed deposit, uint256 indexed amount);

    constructor(string memory _tokenName, uint _maxTotalSupply) {
        maxTotalSupply = _maxTotalSupply;
        // setCurrencyName(_tokenName);
    }

    modifier currentlyOpen() {
        require(isCurveClosed == false, "Buying and selling is closed");
        _;
    }

    function buy(address _destination) currentlyOpen() external payable 
    {
        require(msg.value > 0, "Empty deposit");
        require(getCurrencyTotalSupply() < maxTotalSupply, "All tokenes are already purchased");

        uint256 deposit = msg.value; 
        uint256 currentTokenSupply = getCurrencyTotalSupply();
        uint256 mintAmount = calculateBuyAmount(currentTokenSupply, deposit);
        emit ToPurchaseAmount(msg.sender, deposit, mintAmount);

        mintCurrencyInternal(mintAmount);
        emit SuccessfulyMinted(msg.sender, deposit, mintAmount);

        poolBalance += deposit;
        
        Nil.Token[] memory purchasedTokens = new Nil.Token[](1);
        purchasedTokens[0] = Nil.Token({
            id: uint256(uint160(address(this))),
            amount: mintAmount
        });

        Nil.asyncCallWithTokens(  // TODO: think of exact correct parameters
            _destination,  // dst
            address(this),  // refundTo
            address(msg.sender),  // bounceTo 
            100000,  // feeCredit
            Nil.FORWARD_REMAINING,  // forwardKind
            false,  // deploy
            0,  // value
            purchasedTokens, // tokens
            "" // callData
        );
        emit DidSendAsyncCall(msg.sender, deposit, mintAmount);

        if (poolBalance > MAX_POOL_BALANCE) {
            // TODO: move to DEX
            isCurveClosed = true;
        }
    }

    function sell(uint256 _amount, address _destination) currentlyOpen() external payable {
        require(getCurrencyBalanceOf(msg.sender) >= _amount, "Insufficient balance");

        uint256 currentTokenSupply = getCurrencyTotalSupply();
        uint256 reimbursement = calculateSellPrice(currentTokenSupply, _amount);

        burnCurrencyInternal(reimbursement);
        poolBalance -= reimbursement;

        Nil.asyncCall(    // TODO: think of exact correct parameters
            _destination,  // dst
            address(msg.sender),  // refundTo
            address(msg.sender),  // bounceTo
            100000,  // feeCredit
            Nil.FORWARD_REMAINING,  // forwardKind
            false,  // deploy
            reimbursement,  // value
            ""  // callData
        );
    }

    function getIsCurveClosed() public view returns (bool) {
        return isCurveClosed;
    }

    // TODO: tune formulas
    // Exponential curve for buying tokens: P(x) = k * x^e
    // Where x is totalSupply, e is the curve exponent, and k is a multiplier for scaling the curve.
    function calculateBuyAmount(uint256 currentTokenSupply, uint256 ethAmount) public pure returns (uint256) {
        if (currentTokenSupply == 0) {
            // Price for the first tokens
            return ethAmount / initialPricePerToken;
        }
        // P(x) = k * x^e => tokens = ETH / (k * (currentSupply ^ e))
        return ethAmount / (currentTokenSupply ** curveExponent);
    }

    // Exponential curve for selling tokens: Similar logic for selling based on the supply and reserve.
    function calculateSellPrice(uint256 currentTokenSupply, uint256 tokenAmount) public view returns (uint256) {
        // P(x) = k * x^e => ETH = tokens * (k * (currentSupply ^ e))
        return (tokenAmount * poolBalance) / (currentTokenSupply ** curveExponent);
    }

}
