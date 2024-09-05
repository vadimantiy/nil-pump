/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  NilConfigAbi,
  NilConfigAbiInterface,
} from "../../../nil/Nil.sol/NilConfigAbi";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint8[33]",
                name: "PublicKey",
                type: "uint8[33]",
              },
              {
                internalType: "address",
                name: "WithdrawalAddress",
                type: "address",
              },
            ],
            internalType: "struct Nil.ValidatorInfo[]",
            name: "list",
            type: "tuple[]",
          },
        ],
        internalType: "struct Nil.ParamValidators",
        name: "",
        type: "tuple",
      },
    ],
    name: "curr_validators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "gasPriceScale",
            type: "uint256",
          },
        ],
        internalType: "struct Nil.ParamGasPrice",
        name: "",
        type: "tuple",
      },
    ],
    name: "gas_price",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610502806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063978384d11461003b578063b4cfd86b14610057575b600080fd5b610055600480360381019061005091906103e4565b610073565b005b610071600480360381019061006c919061049f565b610076565b005b50565b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6100db82610092565b810181811067ffffffffffffffff821117156100fa576100f96100a3565b5b80604052505050565b600061010d610079565b905061011982826100d2565b919050565b600080fd5b600080fd5b600067ffffffffffffffff821115610143576101426100a3565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff821115610174576101736100a3565b5b602082029050919050565b600060ff82169050919050565b6101958161017f565b81146101a057600080fd5b50565b6000813590506101b28161018c565b92915050565b60006101cb6101c684610159565b610103565b905080602084028301858111156101e5576101e4610154565b5b835b8181101561020e57806101fa88826101a3565b8452602084019350506020810190506101e7565b5050509392505050565b600082601f83011261022d5761022c610123565b5b602161023a8482856101b8565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061026e82610243565b9050919050565b61027e81610263565b811461028957600080fd5b50565b60008135905061029b81610275565b92915050565b600061044082840312156102b8576102b761008d565b5b6102c26040610103565b905060006102d284828501610218565b6000830152506104206102e78482850161028c565b60208301525092915050565b600061030661030184610128565b610103565b905080838252602082019050610440840283018581111561032a57610329610154565b5b835b81811015610354578061033f88826102a1565b8452602084019350506104408101905061032c565b5050509392505050565b600082601f83011261037357610372610123565b5b81356103838482602086016102f3565b91505092915050565b6000602082840312156103a2576103a161008d565b5b6103ac6020610103565b9050600082013567ffffffffffffffff8111156103cc576103cb61011e565b5b6103d88482850161035e565b60008301525092915050565b6000602082840312156103fa576103f9610083565b5b600082013567ffffffffffffffff81111561041857610417610088565b5b6104248482850161038c565b91505092915050565b6000819050919050565b6104408161042d565b811461044b57600080fd5b50565b60008135905061045d81610437565b92915050565b6000602082840312156104795761047861008d565b5b6104836020610103565b905060006104938482850161044e565b60008301525092915050565b6000602082840312156104b5576104b4610083565b5b60006104c384828501610463565b9150509291505056fea26469706673582212209828c799bab1099c43f5745cb80bd6177f17ac9e69010e314e40460510f1105164736f6c63430008180033";

type NilConfigAbiConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NilConfigAbiConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NilConfigAbi__factory extends ContractFactory {
  constructor(...args: NilConfigAbiConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      NilConfigAbi & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NilConfigAbi__factory {
    return super.connect(runner) as NilConfigAbi__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NilConfigAbiInterface {
    return new Interface(_abi) as NilConfigAbiInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NilConfigAbi {
    return new Contract(address, _abi, runner) as unknown as NilConfigAbi;
  }
}
