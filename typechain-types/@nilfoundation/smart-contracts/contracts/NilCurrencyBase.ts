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
} from "../../../common";

export interface NilCurrencyBaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "burnCurrency"
      | "getCurrencyBalanceOf"
      | "getCurrencyId"
      | "getCurrencyName"
      | "getCurrencyTotalSupply"
      | "getOwnCurrencyBalance"
      | "mintCurrency"
      | "sendCurrency"
      | "setCurrencyName"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnCurrency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrencyBalanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrencyId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrencyName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrencyTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnCurrencyBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintCurrency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendCurrency",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setCurrencyName",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "burnCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrencyTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnCurrencyBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrencyName",
    data: BytesLike
  ): Result;
}

export interface NilCurrencyBase extends BaseContract {
  connect(runner?: ContractRunner | null): NilCurrencyBase;
  waitForDeployment(): Promise<this>;

  interface: NilCurrencyBaseInterface;

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

  burnCurrency: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getCurrencyBalanceOf: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getCurrencyId: TypedContractMethod<[], [bigint], "view">;

  getCurrencyName: TypedContractMethod<[], [string], "view">;

  getCurrencyTotalSupply: TypedContractMethod<[], [bigint], "view">;

  getOwnCurrencyBalance: TypedContractMethod<[], [bigint], "view">;

  mintCurrency: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  sendCurrency: TypedContractMethod<
    [to: AddressLike, currencyId: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setCurrencyName: TypedContractMethod<[name: string], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "burnCurrency"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getCurrencyBalanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCurrencyId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCurrencyName"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCurrencyTotalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOwnCurrencyBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mintCurrency"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sendCurrency"
  ): TypedContractMethod<
    [to: AddressLike, currencyId: BigNumberish, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCurrencyName"
  ): TypedContractMethod<[name: string], [void], "nonpayable">;

  filters: {};
}
