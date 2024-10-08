/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace Nil {
  export type TokenStruct = { id: BigNumberish; amount: BigNumberish };

  export type TokenStructOutput = [id: bigint, amount: bigint] & {
    id: bigint;
    amount: bigint;
  };
}

export interface __Precompile__Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "precompileAsyncCall"
      | "precompileAwaitCall"
      | "precompileConfigParam"
      | "precompileGetCurrencyBalance"
      | "precompileGetGasPrice"
      | "precompileGetMessageTokens"
      | "precompileGetPoseidonHash"
      | "precompileManageCurrency"
      | "precompileSendRequest"
      | "precompileSendTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "precompileAsyncCall",
    values: [
      boolean,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      Nil.TokenStruct[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileAwaitCall",
    values: [AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileConfigParam",
    values: [boolean, string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileGetCurrencyBalance",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileGetGasPrice",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileGetMessageTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "precompileGetPoseidonHash",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileManageCurrency",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileSendRequest",
    values: [AddressLike, Nil.TokenStruct[], BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "precompileSendTokens",
    values: [AddressLike, Nil.TokenStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "precompileAsyncCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileAwaitCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileConfigParam",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileGetCurrencyBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileGetGasPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileGetMessageTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileGetPoseidonHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileManageCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileSendRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "precompileSendTokens",
    data: BytesLike
  ): Result;
}

export interface __Precompile__ extends BaseContract {
  connect(runner?: ContractRunner | null): __Precompile__;
  waitForDeployment(): Promise<this>;

  interface: __Precompile__Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  precompileAsyncCall: TypedContractMethod<
    [
      arg0: boolean,
      arg1: BigNumberish,
      arg2: AddressLike,
      arg3: AddressLike,
      arg4: AddressLike,
      arg5: BigNumberish,
      arg6: Nil.TokenStruct[],
      arg7: BytesLike
    ],
    [boolean],
    "payable"
  >;

  precompileAwaitCall: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: BytesLike],
    [[string, boolean]],
    "payable"
  >;

  precompileConfigParam: TypedContractMethod<
    [isSet: boolean, name: string, data: BytesLike],
    [string],
    "nonpayable"
  >;

  precompileGetCurrencyBalance: TypedContractMethod<
    [id: BigNumberish, addr: AddressLike],
    [bigint],
    "view"
  >;

  precompileGetGasPrice: TypedContractMethod<
    [id: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  precompileGetMessageTokens: TypedContractMethod<
    [],
    [Nil.TokenStructOutput[]],
    "nonpayable"
  >;

  precompileGetPoseidonHash: TypedContractMethod<
    [data: BytesLike],
    [bigint],
    "nonpayable"
  >;

  precompileManageCurrency: TypedContractMethod<
    [amount: BigNumberish, mint: boolean],
    [boolean],
    "nonpayable"
  >;

  precompileSendRequest: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: Nil.TokenStruct[],
      arg2: BigNumberish,
      arg3: BytesLike,
      arg4: BytesLike
    ],
    [boolean],
    "payable"
  >;

  precompileSendTokens: TypedContractMethod<
    [arg0: AddressLike, arg1: Nil.TokenStruct[]],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "precompileAsyncCall"
  ): TypedContractMethod<
    [
      arg0: boolean,
      arg1: BigNumberish,
      arg2: AddressLike,
      arg3: AddressLike,
      arg4: AddressLike,
      arg5: BigNumberish,
      arg6: Nil.TokenStruct[],
      arg7: BytesLike
    ],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "precompileAwaitCall"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: BytesLike],
    [[string, boolean]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "precompileConfigParam"
  ): TypedContractMethod<
    [isSet: boolean, name: string, data: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "precompileGetCurrencyBalance"
  ): TypedContractMethod<
    [id: BigNumberish, addr: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "precompileGetGasPrice"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "precompileGetMessageTokens"
  ): TypedContractMethod<[], [Nil.TokenStructOutput[]], "nonpayable">;
  getFunction(
    nameOrSignature: "precompileGetPoseidonHash"
  ): TypedContractMethod<[data: BytesLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "precompileManageCurrency"
  ): TypedContractMethod<
    [amount: BigNumberish, mint: boolean],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "precompileSendRequest"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: Nil.TokenStruct[],
      arg2: BigNumberish,
      arg3: BytesLike,
      arg4: BytesLike
    ],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "precompileSendTokens"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: Nil.TokenStruct[]],
    [boolean],
    "nonpayable"
  >;

  filters: {};
}
