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
    inputs: [],
    name: "MAX_POOL_BALANCE",
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
        name: "currentTokenSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256",
      },
    ],
    name: "calculateBuyAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentTokenSupply",
        type: "uint256",
      },
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
    name: "getIsCurveClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "isCurveClosed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
  "0x60a06040526000600360006101000a81548160ff0219169083151502179055503480156200002c57600080fd5b506040516200268338038062002683833981810160405281019062000052919062000256565b80608081815250506200006b826200007360201b60201c565b5050620005e4565b8060019081620000849190620004fd565b5050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000f182620000a6565b810181811067ffffffffffffffff82111715620001135762000112620000b7565b5b80604052505050565b60006200012862000088565b9050620001368282620000e6565b919050565b600067ffffffffffffffff821115620001595762000158620000b7565b5b6200016482620000a6565b9050602081019050919050565b60005b838110156200019157808201518184015260208101905062000174565b60008484015250505050565b6000620001b4620001ae846200013b565b6200011c565b905082815260208101848484011115620001d357620001d2620000a1565b5b620001e084828562000171565b509392505050565b600082601f8301126200020057620001ff6200009c565b5b8151620002128482602086016200019d565b91505092915050565b6000819050919050565b62000230816200021b565b81146200023c57600080fd5b50565b600081519050620002508162000225565b92915050565b6000806040838503121562000270576200026f62000092565b5b600083015167ffffffffffffffff81111562000291576200029062000097565b5b6200029f85828601620001e8565b9250506020620002b2858286016200023f565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200030f57607f821691505b602082108103620003255762000324620002c7565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200038f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000350565b6200039b868362000350565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620003de620003d8620003d2846200021b565b620003b3565b6200021b565b9050919050565b6000819050919050565b620003fa83620003bd565b620004126200040982620003e5565b8484546200035d565b825550505050565b600090565b620004296200041a565b62000436818484620003ef565b505050565b5b818110156200045e57620004526000826200041f565b6001810190506200043c565b5050565b601f821115620004ad5762000477816200032b565b620004828462000340565b8101602085101562000492578190505b620004aa620004a18562000340565b8301826200043b565b50505b505050565b600082821c905092915050565b6000620004d260001984600802620004b2565b1980831691505092915050565b6000620004ed8383620004bf565b9150826002028217905092915050565b6200050882620002bc565b67ffffffffffffffff811115620005245762000523620000b7565b5b620005308254620002f6565b6200053d82828562000462565b600060209050601f83116001811462000575576000841562000560578287015190505b6200056c8582620004df565b865550620005dc565b601f19841662000585866200032b565b60005b82811015620005af5784890151825560018201915060208501945060208101905062000588565b86831015620005cf5784890151620005cb601f891682620004bf565b8355505b6001600288020188555050505b505050505050565b60805161207c62000607600039600081816105020152610899015261207c6000f3fe6080604052600436106101145760003560e01c806396365d44116100a0578063d064d78411610064578063d064d78414610384578063dc4c1328146103af578063eed20631146103da578063f088d54714610403578063fa4f79881461041f57610114565b806396365d44146102af57806397856308146102da578063add29c6d14610305578063b534638e14610330578063cf387fed1461035957610114565b80632ab4d052116100e75780632ab4d052146101d55780634189a68e14610200578063551c5f861461021c5780635e38b66c1461024757806389b7096b1461028457610114565b806303ff40fb146101195780631072b91f146101565780632864e8d61461017f5780632a9795cd146101aa575b600080fd5b34801561012557600080fd5b50610140600480360381019061013b9190610f85565b61045c565b60405161014d9190610fd4565b60405180910390f35b34801561016257600080fd5b5061017d60048036038101906101789190610fef565b61049b565b005b34801561018b57600080fd5b506101946104ef565b6040516101a19190610fd4565b60405180910390f35b3480156101b657600080fd5b506101bf6104fb565b6040516101cc9190610fd4565b60405180910390f35b3480156101e157600080fd5b506101ea610500565b6040516101f79190610fd4565b60405180910390f35b61021a6004803603810190610215919061107a565b610524565b005b34801561022857600080fd5b5061023161062a565b60405161023e91906110d5565b60405180910390f35b34801561025357600080fd5b5061026e600480360381019061026991906110f0565b610641565b60405161027b9190610fd4565b60405180910390f35b34801561029057600080fd5b5061029961065b565b6040516102a691906110d5565b60405180910390f35b3480156102bb57600080fd5b506102c461066e565b6040516102d19190610fd4565b60405180910390f35b3480156102e657600080fd5b506102ef610674565b6040516102fc9190610fd4565b60405180910390f35b34801561031157600080fd5b5061031a61068c565b6040516103279190610fd4565b60405180910390f35b34801561033c57600080fd5b506103576004803603810190610352919061111d565b610695565b005b34801561036557600080fd5b5061036e6106ed565b60405161037b9190610fd4565b60405180910390f35b34801561039057600080fd5b5061039961070b565b6040516103a69190611200565b60405180910390f35b3480156103bb57600080fd5b506103c461079d565b6040516103d19190610fd4565b60405180910390f35b3480156103e657600080fd5b5061040160048036038101906103fc9190611357565b6107a3565b005b61041d600480360381019061041891906110f0565b6107fe565b005b34801561042b57600080fd5b5061044660048036038101906104419190610f85565b610b0d565b6040516104539190610fd4565b60405180910390f35b600080830361047a576103e88261047391906113fe565b9050610495565b6002836104879190611562565b8261049291906113fe565b90505b92915050565b6104a3610b3c565b156104e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104da9061161f565b60405180910390fd5b6104ec81610c4e565b50565b678ac7230489e8000081565b600281565b7f000000000000000000000000000000000000000000000000000000000000000081565b60001515600360009054906101000a900460ff1615151461057a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105719061168b565b60405180910390fd5b8161058433610641565b10156105c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bc906116f7565b60405180910390fd5b60006105cf61068c565b905060006105dd8285610b0d565b90506105e881610d2b565b80600260008282546105fa9190611717565b92505081905550610624833333620186a06000808760405180602001604052806000815250610d2e565b50505050565b6000600360009054906101000a900460ff16905090565b60006106548261064f6106ed565b610d4c565b9050919050565b600360009054906101000a900460ff1681565b60025481565b6000610687306106826106ed565b610d4c565b905090565b60008054905090565b61069d610b3c565b156106dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d49061161f565b60405180910390fd5b6106e8838383610dd3565b505050565b60003073ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461071a9061177a565b80601f01602080910402602001604051908101604052809291908181526020018280546107469061177a565b80156107935780601f1061076857610100808354040283529160200191610793565b820191906000526020600020905b81548152906001019060200180831161077657829003601f168201915b5050505050905090565b6103e881565b6107ab610b3c565b156107eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e29061161f565b60405180910390fd5b80600190816107fa9190611957565b5050565b60001515600360009054906101000a900460ff16151514610854576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084b9061168b565b60405180910390fd5b60003411610897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088e90611a75565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006108c061068c565b10610900576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108f790611b07565b60405180910390fd5b6000349050600061090f61068c565b9050600061091d828461045c565b905080833373ffffffffffffffffffffffffffffffffffffffff167f3d97ab026a5fdfd38a9e144f940d9e7ddca4f2638f73f3dcb2cac8374438139d60405160405180910390a461096d81610c4e565b80833373ffffffffffffffffffffffffffffffffffffffff167f1983d4a8948de0030f1101b7e335726bee7bc5f4e6617a16c9722a35d45e80d460405160405180910390a482600260008282546109c49190611b27565b925050819055506000600167ffffffffffffffff8111156109e8576109e761122c565b5b604051908082528060200260200182016040528015610a2157816020015b610a0e610f21565b815260200190600190039081610a065790505b50905060405180604001604052803073ffffffffffffffffffffffffffffffffffffffff1681526020018381525081600081518110610a6357610a62611b5b565b5b6020026020010181905250610a93853033620186a060008060008860405180602001604052806000815250610e89565b81843373ffffffffffffffffffffffffffffffffffffffff167f3faa518abd490a442e1e18b02cafe62f0351db93d85f67e8d0cbfccb9258a52060405160405180910390a4678ac7230489e800006002541115610b06576001600360006101000a81548160ff0219169083151502179055505b5050505050565b6000600283610b1c9190611562565b60025483610b2a9190611b8a565b610b3491906113fe565b905092915050565b6000606060008060ff73ffffffffffffffffffffffffffffffffffffffff1683604051610b699190611c13565b600060405180830381855afa9150503d8060008114610ba4576040519150601f19603f3d011682016040523d82523d6000602084013e610ba9565b606091505b509150915081610bee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be590611c76565b60405180910390fd5b6000815111610c32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2990611d08565b60405180910390fd5b80806020019051810190610c469190611d54565b935050505090565b600060d073ffffffffffffffffffffffffffffffffffffffff1663f4c261b5836040518263ffffffff1660e01b8152600401610c8a9190610fd4565b6020604051808303816000875af1158015610ca9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ccd9190611d54565b905080610d0f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d0690611dcd565b60405180910390fd5b81600080828254610d209190611b27565b925050819055505050565b50565b6060610d4189898989898989888a610e89565b505050505050505050565b600060d173ffffffffffffffffffffffffffffffffffffffff16633a1735fc83856040518363ffffffff1660e01b8152600401610d8a929190611dfc565b602060405180830381865afa158015610da7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dcb9190611e3a565b905092915050565b6000600167ffffffffffffffff811115610df057610def61122c565b5b604051908082528060200260200182016040528015610e2957816020015b610e16610f21565b815260200190600190039081610e0e5790505b50905060405180604001604052808481526020018381525081600081518110610e5557610e54611b5b565b5b6020026020010181905250610e83846000806000806000808860405180602001604052806000815250610e89565b50505050565b60fd73ffffffffffffffffffffffffffffffffffffffff1663f1d1cf1c8486888d8d8d8d8a8a6040518a63ffffffff1660e01b8152600401610ed2989796959493929190611fba565b60206040518083038185885af1158015610ef0573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f159190611d54565b50505050505050505050565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610f6281610f4f565b8114610f6d57600080fd5b50565b600081359050610f7f81610f59565b92915050565b60008060408385031215610f9c57610f9b610f45565b5b6000610faa85828601610f70565b9250506020610fbb85828601610f70565b9150509250929050565b610fce81610f4f565b82525050565b6000602082019050610fe96000830184610fc5565b92915050565b60006020828403121561100557611004610f45565b5b600061101384828501610f70565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110478261101c565b9050919050565b6110578161103c565b811461106257600080fd5b50565b6000813590506110748161104e565b92915050565b6000806040838503121561109157611090610f45565b5b600061109f85828601610f70565b92505060206110b085828601611065565b9150509250929050565b60008115159050919050565b6110cf816110ba565b82525050565b60006020820190506110ea60008301846110c6565b92915050565b60006020828403121561110657611105610f45565b5b600061111484828501611065565b91505092915050565b60008060006060848603121561113657611135610f45565b5b600061114486828701611065565b935050602061115586828701610f70565b925050604061116686828701610f70565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b838110156111aa57808201518184015260208101905061118f565b60008484015250505050565b6000601f19601f8301169050919050565b60006111d282611170565b6111dc818561117b565b93506111ec81856020860161118c565b6111f5816111b6565b840191505092915050565b6000602082019050818103600083015261121a81846111c7565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611264826111b6565b810181811067ffffffffffffffff821117156112835761128261122c565b5b80604052505050565b6000611296610f3b565b90506112a2828261125b565b919050565b600067ffffffffffffffff8211156112c2576112c161122c565b5b6112cb826111b6565b9050602081019050919050565b82818337600083830152505050565b60006112fa6112f5846112a7565b61128c565b90508281526020810184848401111561131657611315611227565b5b6113218482856112d8565b509392505050565b600082601f83011261133e5761133d611222565b5b813561134e8482602086016112e7565b91505092915050565b60006020828403121561136d5761136c610f45565b5b600082013567ffffffffffffffff81111561138b5761138a610f4a565b5b61139784828501611329565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061140982610f4f565b915061141483610f4f565b925082611424576114236113a0565b5b828204905092915050565b60008160011c9050919050565b6000808291508390505b600185111561148657808604811115611462576114616113cf565b5b60018516156114715780820291505b808102905061147f8561142f565b9450611446565b94509492505050565b60008261149f576001905061155b565b816114ad576000905061155b565b81600181146114c357600281146114cd576114fc565b600191505061155b565b60ff8411156114df576114de6113cf565b5b8360020a9150848211156114f6576114f56113cf565b5b5061155b565b5060208310610133831016604e8410600b84101617156115315782820a90508381111561152c5761152b6113cf565b5b61155b565b61153e848484600161143c565b92509050818404811115611555576115546113cf565b5b81810290505b9392505050565b600061156d82610f4f565b915061157883610f4f565b92506115a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461148f565b905092915050565b7f547279696e6720746f2063616c6c2065787465726e616c2066756e6374696f6e60008201527f207769746820696e7465726e616c206d65737361676500000000000000000000602082015250565b600061160960368361117b565b9150611614826115ad565b604082019050919050565b60006020820190508181036000830152611638816115fc565b9050919050565b7f427579696e6720616e642073656c6c696e6720697320636c6f73656400000000600082015250565b6000611675601c8361117b565b91506116808261163f565b602082019050919050565b600060208201905081810360008301526116a481611668565b9050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b60006116e160148361117b565b91506116ec826116ab565b602082019050919050565b60006020820190508181036000830152611710816116d4565b9050919050565b600061172282610f4f565b915061172d83610f4f565b9250828203905081811115611745576117446113cf565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061179257607f821691505b6020821081036117a5576117a461174b565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261180d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826117d0565b61181786836117d0565b95508019841693508086168417925050509392505050565b6000819050919050565b600061185461184f61184a84610f4f565b61182f565b610f4f565b9050919050565b6000819050919050565b61186e83611839565b61188261187a8261185b565b8484546117dd565b825550505050565b600090565b61189761188a565b6118a2818484611865565b505050565b5b818110156118c6576118bb60008261188f565b6001810190506118a8565b5050565b601f82111561190b576118dc816117ab565b6118e5846117c0565b810160208510156118f4578190505b611908611900856117c0565b8301826118a7565b50505b505050565b600082821c905092915050565b600061192e60001984600802611910565b1980831691505092915050565b6000611947838361191d565b9150826002028217905092915050565b61196082611170565b67ffffffffffffffff8111156119795761197861122c565b5b611983825461177a565b61198e8282856118ca565b600060209050601f8311600181146119c157600084156119af578287015190505b6119b9858261193b565b865550611a21565b601f1984166119cf866117ab565b60005b828110156119f7578489015182556001820191506020850194506020810190506119d2565b86831015611a145784890151611a10601f89168261191d565b8355505b6001600288020188555050505b505050505050565b7f456d707479206465706f73697400000000000000000000000000000000000000600082015250565b6000611a5f600d8361117b565b9150611a6a82611a29565b602082019050919050565b60006020820190508181036000830152611a8e81611a52565b9050919050565b7f416c6c20746f6b656e65732061726520616c726561647920707572636861736560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611af160218361117b565b9150611afc82611a95565b604082019050919050565b60006020820190508181036000830152611b2081611ae4565b9050919050565b6000611b3282610f4f565b9150611b3d83610f4f565b9250828201905080821115611b5557611b546113cf565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611b9582610f4f565b9150611ba083610f4f565b9250828202611bae81610f4f565b91508282048414831517611bc557611bc46113cf565b5b5092915050565b600081519050919050565b600081905092915050565b6000611bed82611bcc565b611bf78185611bd7565b9350611c0781856020860161118c565b80840191505092915050565b6000611c1f8284611be2565b915081905092915050565b7f507265636f6d70696c656420636f6e74726163742063616c6c206661696c6564600082015250565b6000611c6060208361117b565b9150611c6b82611c2a565b602082019050919050565b60006020820190508181036000830152611c8f81611c53565b9050919050565b7f2749535f494e5445524e414c5f4d455353414745272072657475726e7320696e60008201527f76616c6964206461746100000000000000000000000000000000000000000000602082015250565b6000611cf2602a8361117b565b9150611cfd82611c96565b604082019050919050565b60006020820190508181036000830152611d2181611ce5565b9050919050565b611d31816110ba565b8114611d3c57600080fd5b50565b600081519050611d4e81611d28565b92915050565b600060208284031215611d6a57611d69610f45565b5b6000611d7884828501611d3f565b91505092915050565b7f4d696e74206661696c6564000000000000000000000000000000000000000000600082015250565b6000611db7600b8361117b565b9150611dc282611d81565b602082019050919050565b60006020820190508181036000830152611de681611daa565b9050919050565b611df68161103c565b82525050565b6000604082019050611e116000830185610fc5565b611e1e6020830184611ded565b9392505050565b600081519050611e3481610f59565b92915050565b600060208284031215611e5057611e4f610f45565b5b6000611e5e84828501611e25565b91505092915050565b600060ff82169050919050565b611e7d81611e67565b82525050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611eb881610f4f565b82525050565b604082016000820151611ed46000850182611eaf565b506020820151611ee76020850182611eaf565b50505050565b6000611ef98383611ebe565b60408301905092915050565b6000602082019050919050565b6000611f1d82611e83565b611f278185611e8e565b9350611f3283611e9f565b8060005b83811015611f63578151611f4a8882611eed565b9750611f5583611f05565b925050600181019050611f36565b5085935050505092915050565b600082825260208201905092915050565b6000611f8c82611bcc565b611f968185611f70565b9350611fa681856020860161118c565b611faf816111b6565b840191505092915050565b600061010082019050611fd0600083018b6110c6565b611fdd602083018a611e74565b611fea6040830189611ded565b611ff76060830188611ded565b6120046080830187611ded565b61201160a0830186610fc5565b81810360c08301526120238185611f12565b905081810360e08301526120378184611f81565b9050999850505050505050505056fea26469706673582212206da261b163a9398d92136a96947402881ddb4f3ba25fc0c4b816f8fa9c5c6d0f64736f6c63430008180033";

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
