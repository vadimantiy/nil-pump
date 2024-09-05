/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  NilBounceable,
  NilBounceableInterface,
} from "../../../nil/Nil.sol/NilBounceable";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "err",
        type: "string",
      },
    ],
    name: "bounce",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class NilBounceable__factory {
  static readonly abi = _abi;
  static createInterface(): NilBounceableInterface {
    return new Interface(_abi) as NilBounceableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NilBounceable {
    return new Contract(address, _abi, runner) as unknown as NilBounceable;
  }
}
