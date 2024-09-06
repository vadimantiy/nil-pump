/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type {
  BondingCurveBasic,
  BondingCurveBasicInterface,
} from "../BondingCurveBasic";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_maxTotalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DidSendAsyncCall",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SuccessfulyMinted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "deposit",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ToPurchaseAmount",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_destination",
        type: "address",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "calculateBuyPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "calculateSellPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "curveExponent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrencyBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrencyId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrencyName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrencyTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwnCurrencyBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialPricePerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_destination",
        type: "address",
      },
    ],
    name: "sell",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "currencyId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sendCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "setCurrencyName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620023e3380380620023e383398181016040528101906200003791906200023b565b806080818152505062000050826200005860201b60201c565b5050620005c9565b8060019081620000699190620004e2565b5050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000d6826200008b565b810181811067ffffffffffffffff82111715620000f857620000f76200009c565b5b80604052505050565b60006200010d6200006d565b90506200011b8282620000cb565b919050565b600067ffffffffffffffff8211156200013e576200013d6200009c565b5b62000149826200008b565b9050602081019050919050565b60005b838110156200017657808201518184015260208101905062000159565b60008484015250505050565b600062000199620001938462000120565b62000101565b905082815260208101848484011115620001b857620001b762000086565b5b620001c584828562000156565b509392505050565b600082601f830112620001e557620001e462000081565b5b8151620001f784826020860162000182565b91505092915050565b6000819050919050565b620002158162000200565b81146200022157600080fd5b50565b60008151905062000235816200020a565b92915050565b6000806040838503121562000255576200025462000077565b5b600083015167ffffffffffffffff8111156200027657620002756200007c565b5b6200028485828601620001cd565b9250506020620002978582860162000224565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002f457607f821691505b6020821081036200030a5762000309620002ac565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003747fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000335565b62000380868362000335565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620003c3620003bd620003b78462000200565b62000398565b62000200565b9050919050565b6000819050919050565b620003df83620003a2565b620003f7620003ee82620003ca565b84845462000342565b825550505050565b600090565b6200040e620003ff565b6200041b818484620003d4565b505050565b5b8181101562000443576200043760008262000404565b60018101905062000421565b5050565b601f82111562000492576200045c8162000310565b620004678462000325565b8101602085101562000477578190505b6200048f620004868562000325565b83018262000420565b50505b505050565b600082821c905092915050565b6000620004b76000198460080262000497565b1980831691505092915050565b6000620004d28383620004a4565b9150826002028217905092915050565b620004ed82620002a1565b67ffffffffffffffff8111156200050957620005086200009c565b5b620005158254620002db565b6200052282828562000447565b600060209050601f8311600181146200055a576000841562000545578287015190505b620005518582620004c4565b865550620005c1565b601f1984166200056a8662000310565b60005b8281101562000594578489015182556001820191506020850194506020810190506200056d565b86831015620005b45784890151620005b0601f891682620004a4565b8355505b6001600288020188555050505b505050505050565b608051611df0620005f36000396000818161041501528181610753015261080e0152611df06000f3fe6080604052600436106100f35760003560e01c8063978563081161008a578063d064d78411610059578063d064d7841461031f578063dc4c13281461034a578063eed2063114610375578063f088d5471461039e576100f3565b80639785630814610275578063add29c6d146102a0578063b534638e146102cb578063cf387fed146102f4576100f3565b80634189a68e116100c65780634189a68e146101b457806358b9a996146101d05780635e38b66c1461020d57806396365d441461024a576100f3565b80631072b91f146100f85780632a9795cd146101215780632ab4d0521461014c5780632e5e2b3b14610177575b600080fd5b34801561010457600080fd5b5061011f600480360381019061011a9190610dc0565b6103ba565b005b34801561012d57600080fd5b5061013661040e565b6040516101439190610dfc565b60405180910390f35b34801561015857600080fd5b50610161610413565b60405161016e9190610dfc565b60405180910390f35b34801561018357600080fd5b5061019e60048036038101906101999190610dc0565b610437565b6040516101ab9190610dfc565b60405180910390f35b6101ce60048036038101906101c99190610e75565b610471565b005b3480156101dc57600080fd5b506101f760048036038101906101f29190610dc0565b610513565b6040516102049190610dfc565b60405180910390f35b34801561021957600080fd5b50610234600480360381019061022f9190610eb5565b61055f565b6040516102419190610dfc565b60405180910390f35b34801561025657600080fd5b5061025f610579565b60405161026c9190610dfc565b60405180910390f35b34801561028157600080fd5b5061028a61057f565b6040516102979190610dfc565b60405180910390f35b3480156102ac57600080fd5b506102b5610597565b6040516102c29190610dfc565b60405180910390f35b3480156102d757600080fd5b506102f260048036038101906102ed9190610ee2565b6105a0565b005b34801561030057600080fd5b506103096105f8565b6040516103169190610dfc565b60405180910390f35b34801561032b57600080fd5b50610334610616565b6040516103419190610fc5565b60405180910390f35b34801561035657600080fd5b5061035f6106a8565b60405161036c9190610dfc565b60405180910390f35b34801561038157600080fd5b5061039c6004803603810190610397919061111c565b6106ae565b005b6103b860048036038101906103b39190610eb5565b610709565b005b6103c2610977565b15610402576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f9906111d7565b60405180910390fd5b61040b81610a89565b50565b600281565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080610442610597565b90506002816104519190611359565b6002548461045f91906113a4565b6104699190611415565b915050919050565b8161047b3361055f565b10156104bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b390611492565b60405180910390fd5b60006104c783610437565b90506104d281610b66565b80600260008282546104e491906114b2565b9250508190555061050e823333620186a06000808760405180602001604052806000815250610b69565b505050565b60008061051e610597565b90506000810361053e576103e8836105369190611415565b91505061055a565b60028161054b9190611359565b836105569190611415565b9150505b919050565b60006105728261056d6105f8565b610b87565b9050919050565b60025481565b60006105923061058d6105f8565b610b87565b905090565b60008054905090565b6105a8610977565b156105e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105df906111d7565b60405180910390fd5b6105f3838383610c0e565b505050565b60003073ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461062590611515565b80601f016020809104026020016040519081016040528092919081815260200182805461065190611515565b801561069e5780601f106106735761010080835404028352916020019161069e565b820191906000526020600020905b81548152906001019060200180831161068157829003601f168201915b5050505050905090565b6103e881565b6106b6610977565b156106f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ed906111d7565b60405180910390fd5b806001908161070591906116f2565b5050565b600034905060008111610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074890611810565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000061077a610597565b106107ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b1906118a2565b60405180910390fd5b60006107c582610513565b905080823373ffffffffffffffffffffffffffffffffffffffff167f3d97ab026a5fdfd38a9e144f940d9e7ddca4f2638f73f3dcb2cac8374438139d60405160405180910390a47f000000000000000000000000000000000000000000000000000000000000000081610836610597565b61084091906118c2565b505061084b81610a89565b80823373ffffffffffffffffffffffffffffffffffffffff167f1983d4a8948de0030f1101b7e335726bee7bc5f4e6617a16c9722a35d45e80d460405160405180910390a481600260008282546108a291906118c2565b925050819055506000600167ffffffffffffffff8111156108c6576108c5610ff1565b5b6040519080825280602002602001820160405280156108ff57816020015b6108ec610d5c565b8152602001906001900390816108e45790505b50905060405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018381525081600081518110610941576109406118f6565b5b6020026020010181905250610971843033620186a060008060008860405180602001604052806000815250610cc4565b50505050565b6000606060008060ff73ffffffffffffffffffffffffffffffffffffffff16836040516109a4919061196c565b600060405180830381855afa9150503d80600081146109df576040519150601f19603f3d011682016040523d82523d6000602084013e6109e4565b606091505b509150915081610a29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a20906119cf565b60405180910390fd5b6000815111610a6d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6490611a61565b60405180910390fd5b80806020019051810190610a819190611ab9565b935050505090565b600060d073ffffffffffffffffffffffffffffffffffffffff1663f4c261b5836040518263ffffffff1660e01b8152600401610ac59190610dfc565b6020604051808303816000875af1158015610ae4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b089190611ab9565b905080610b4a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4190611b32565b60405180910390fd5b81600080828254610b5b91906118c2565b925050819055505050565b50565b6060610b7c89898989898989888a610cc4565b505050505050505050565b600060d173ffffffffffffffffffffffffffffffffffffffff16633a1735fc83856040518363ffffffff1660e01b8152600401610bc5929190611b61565b602060405180830381865afa158015610be2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c069190611b9f565b905092915050565b6000600167ffffffffffffffff811115610c2b57610c2a610ff1565b5b604051908082528060200260200182016040528015610c6457816020015b610c51610d5c565b815260200190600190039081610c495790505b50905060405180604001604052808481526020018381525081600081518110610c9057610c8f6118f6565b5b6020026020010181905250610cbe846000806000806000808860405180602001604052806000815250610cc4565b50505050565b60fd73ffffffffffffffffffffffffffffffffffffffff1663f1d1cf1c8486888d8d8d8d8a8a6040518a63ffffffff1660e01b8152600401610d0d989796959493929190611d2e565b60206040518083038185885af1158015610d2b573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610d509190611ab9565b50505050505050505050565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610d9d81610d8a565b8114610da857600080fd5b50565b600081359050610dba81610d94565b92915050565b600060208284031215610dd657610dd5610d80565b5b6000610de484828501610dab565b91505092915050565b610df681610d8a565b82525050565b6000602082019050610e116000830184610ded565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610e4282610e17565b9050919050565b610e5281610e37565b8114610e5d57600080fd5b50565b600081359050610e6f81610e49565b92915050565b60008060408385031215610e8c57610e8b610d80565b5b6000610e9a85828601610dab565b9250506020610eab85828601610e60565b9150509250929050565b600060208284031215610ecb57610eca610d80565b5b6000610ed984828501610e60565b91505092915050565b600080600060608486031215610efb57610efa610d80565b5b6000610f0986828701610e60565b9350506020610f1a86828701610dab565b9250506040610f2b86828701610dab565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f6f578082015181840152602081019050610f54565b60008484015250505050565b6000601f19601f8301169050919050565b6000610f9782610f35565b610fa18185610f40565b9350610fb1818560208601610f51565b610fba81610f7b565b840191505092915050565b60006020820190508181036000830152610fdf8184610f8c565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61102982610f7b565b810181811067ffffffffffffffff8211171561104857611047610ff1565b5b80604052505050565b600061105b610d76565b90506110678282611020565b919050565b600067ffffffffffffffff82111561108757611086610ff1565b5b61109082610f7b565b9050602081019050919050565b82818337600083830152505050565b60006110bf6110ba8461106c565b611051565b9050828152602081018484840111156110db576110da610fec565b5b6110e684828561109d565b509392505050565b600082601f83011261110357611102610fe7565b5b81356111138482602086016110ac565b91505092915050565b60006020828403121561113257611131610d80565b5b600082013567ffffffffffffffff8111156111505761114f610d85565b5b61115c848285016110ee565b91505092915050565b7f547279696e6720746f2063616c6c2065787465726e616c2066756e6374696f6e60008201527f207769746820696e7465726e616c206d65737361676500000000000000000000602082015250565b60006111c1603683610f40565b91506111cc82611165565b604082019050919050565b600060208201905081810360008301526111f0816111b4565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111561127d57808604811115611259576112586111f7565b5b60018516156112685780820291505b808102905061127685611226565b945061123d565b94509492505050565b6000826112965760019050611352565b816112a45760009050611352565b81600181146112ba57600281146112c4576112f3565b6001915050611352565b60ff8411156112d6576112d56111f7565b5b8360020a9150848211156112ed576112ec6111f7565b5b50611352565b5060208310610133831016604e8410600b84101617156113285782820a905083811115611323576113226111f7565b5b611352565b6113358484846001611233565b9250905081840481111561134c5761134b6111f7565b5b81810290505b9392505050565b600061136482610d8a565b915061136f83610d8a565b925061139c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484611286565b905092915050565b60006113af82610d8a565b91506113ba83610d8a565b92508282026113c881610d8a565b915082820484148315176113df576113de6111f7565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061142082610d8a565b915061142b83610d8a565b92508261143b5761143a6113e6565b5b828204905092915050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b600061147c601483610f40565b915061148782611446565b602082019050919050565b600060208201905081810360008301526114ab8161146f565b9050919050565b60006114bd82610d8a565b91506114c883610d8a565b92508282039050818111156114e0576114df6111f7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061152d57607f821691505b6020821081036115405761153f6114e6565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026115a87fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261156b565b6115b2868361156b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006115ef6115ea6115e584610d8a565b6115ca565b610d8a565b9050919050565b6000819050919050565b611609836115d4565b61161d611615826115f6565b848454611578565b825550505050565b600090565b611632611625565b61163d818484611600565b505050565b5b818110156116615761165660008261162a565b600181019050611643565b5050565b601f8211156116a65761167781611546565b6116808461155b565b8101602085101561168f578190505b6116a361169b8561155b565b830182611642565b50505b505050565b600082821c905092915050565b60006116c9600019846008026116ab565b1980831691505092915050565b60006116e283836116b8565b9150826002028217905092915050565b6116fb82610f35565b67ffffffffffffffff81111561171457611713610ff1565b5b61171e8254611515565b611729828285611665565b600060209050601f83116001811461175c576000841561174a578287015190505b61175485826116d6565b8655506117bc565b601f19841661176a86611546565b60005b828110156117925784890151825560018201915060208501945060208101905061176d565b868310156117af57848901516117ab601f8916826116b8565b8355505b6001600288020188555050505b505050505050565b7f456d707479206465706f73697400000000000000000000000000000000000000600082015250565b60006117fa600d83610f40565b9150611805826117c4565b602082019050919050565b60006020820190508181036000830152611829816117ed565b9050919050565b7f416c6c20746f6b656e65732061726520616c726561647920707572636861736560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b600061188c602183610f40565b915061189782611830565b604082019050919050565b600060208201905081810360008301526118bb8161187f565b9050919050565b60006118cd82610d8a565b91506118d883610d8a565b92508282019050808211156118f0576118ef6111f7565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600081905092915050565b600061194682611925565b6119508185611930565b9350611960818560208601610f51565b80840191505092915050565b6000611978828461193b565b915081905092915050565b7f507265636f6d70696c656420636f6e74726163742063616c6c206661696c6564600082015250565b60006119b9602083610f40565b91506119c482611983565b602082019050919050565b600060208201905081810360008301526119e8816119ac565b9050919050565b7f2749535f494e5445524e414c5f4d455353414745272072657475726e7320696e60008201527f76616c6964206461746100000000000000000000000000000000000000000000602082015250565b6000611a4b602a83610f40565b9150611a56826119ef565b604082019050919050565b60006020820190508181036000830152611a7a81611a3e565b9050919050565b60008115159050919050565b611a9681611a81565b8114611aa157600080fd5b50565b600081519050611ab381611a8d565b92915050565b600060208284031215611acf57611ace610d80565b5b6000611add84828501611aa4565b91505092915050565b7f4d696e74206661696c6564000000000000000000000000000000000000000000600082015250565b6000611b1c600b83610f40565b9150611b2782611ae6565b602082019050919050565b60006020820190508181036000830152611b4b81611b0f565b9050919050565b611b5b81610e37565b82525050565b6000604082019050611b766000830185610ded565b611b836020830184611b52565b9392505050565b600081519050611b9981610d94565b92915050565b600060208284031215611bb557611bb4610d80565b5b6000611bc384828501611b8a565b91505092915050565b611bd581611a81565b82525050565b600060ff82169050919050565b611bf181611bdb565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611c2c81610d8a565b82525050565b604082016000820151611c486000850182611c23565b506020820151611c5b6020850182611c23565b50505050565b6000611c6d8383611c32565b60408301905092915050565b6000602082019050919050565b6000611c9182611bf7565b611c9b8185611c02565b9350611ca683611c13565b8060005b83811015611cd7578151611cbe8882611c61565b9750611cc983611c79565b925050600181019050611caa565b5085935050505092915050565b600082825260208201905092915050565b6000611d0082611925565b611d0a8185611ce4565b9350611d1a818560208601610f51565b611d2381610f7b565b840191505092915050565b600061010082019050611d44600083018b611bcc565b611d51602083018a611be8565b611d5e6040830189611b52565b611d6b6060830188611b52565b611d786080830187611b52565b611d8560a0830186610ded565b81810360c0830152611d978185611c86565b905081810360e0830152611dab8184611cf5565b9050999850505050505050505056fea2646970667358221220ee073045b5dedff506215b182c52c9ed5ba45512191147428e3ede9ce7d5162b64736f6c63430008180033";

type BondingCurveBasicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BondingCurveBasicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BondingCurveBasic__factory extends ContractFactory {
  constructor(...args: BondingCurveBasicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _tokenName: string,
    _maxTotalSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _tokenName,
      _maxTotalSupply,
      overrides || {}
    );
  }
  override deploy(
    _tokenName: string,
    _maxTotalSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _tokenName,
      _maxTotalSupply,
      overrides || {}
    ) as Promise<
      BondingCurveBasic & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BondingCurveBasic__factory {
    return super.connect(runner) as BondingCurveBasic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BondingCurveBasicInterface {
    return new Interface(_abi) as BondingCurveBasicInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BondingCurveBasic {
    return new Contract(address, _abi, runner) as unknown as BondingCurveBasic;
  }
}
