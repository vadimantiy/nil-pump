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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface BondingCurveBasicInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_POOL_BALANCE"
      | "burnCurrency"
      | "buy"
      | "calculateBuyAmount"
      | "calculateSellPrice"
      | "curveExponent"
      | "getCurrencyBalanceOf"
      | "getCurrencyId"
      | "getCurrencyName"
      | "getCurrencyTotalSupply"
      | "getIsCurveClosed"
      | "getOwnCurrencyBalance"
      | "initialPricePerToken"
      | "isCurveClosed"
      | "maxTotalSupply"
      | "mintCurrency"
      | "poolBalance"
      | "sell"
      | "sendCurrency"
      | "setCurrencyName"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DidSendAsyncCall"
      | "SuccessfulyMinted"
      | "ToPurchaseAmount"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MAX_POOL_BALANCE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "burnCurrency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buy", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "calculateBuyAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSellPrice",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "curveExponent",
    values?: undefined
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
    functionFragment: "getIsCurveClosed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnCurrencyBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialPricePerToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isCurveClosed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mintCurrency",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sell",
    values: [BigNumberish, AddressLike]
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
    functionFragment: "MAX_POOL_BALANCE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateBuyAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSellPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "curveExponent",
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
    functionFragment: "getIsCurveClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnCurrencyBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialPricePerToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCurveClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mintCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sell", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendCurrency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCurrencyName",
    data: BytesLike
  ): Result;
}

export namespace DidSendAsyncCallEvent {
  export type InputTuple = [
    sender: AddressLike,
    deposit: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, deposit: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    deposit: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuccessfulyMintedEvent {
  export type InputTuple = [
    sender: AddressLike,
    deposit: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, deposit: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    deposit: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ToPurchaseAmountEvent {
  export type InputTuple = [
    sender: AddressLike,
    deposit: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [sender: string, deposit: bigint, amount: bigint];
  export interface OutputObject {
    sender: string;
    deposit: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BondingCurveBasic extends BaseContract {
  connect(runner?: ContractRunner | null): BondingCurveBasic;
  waitForDeployment(): Promise<this>;

  interface: BondingCurveBasicInterface;

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

  MAX_POOL_BALANCE: TypedContractMethod<[], [bigint], "view">;

  burnCurrency: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  buy: TypedContractMethod<[_destination: AddressLike], [void], "payable">;

  calculateBuyAmount: TypedContractMethod<
    [currentTokenSupply: BigNumberish, ethAmount: BigNumberish],
    [bigint],
    "view"
  >;

  calculateSellPrice: TypedContractMethod<
    [currentTokenSupply: BigNumberish, tokenAmount: BigNumberish],
    [bigint],
    "view"
  >;

  curveExponent: TypedContractMethod<[], [bigint], "view">;

  getCurrencyBalanceOf: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getCurrencyId: TypedContractMethod<[], [bigint], "view">;

  getCurrencyName: TypedContractMethod<[], [string], "view">;

  getCurrencyTotalSupply: TypedContractMethod<[], [bigint], "view">;

  getIsCurveClosed: TypedContractMethod<[], [boolean], "view">;

  getOwnCurrencyBalance: TypedContractMethod<[], [bigint], "view">;

  initialPricePerToken: TypedContractMethod<[], [bigint], "view">;

  isCurveClosed: TypedContractMethod<[], [boolean], "view">;

  maxTotalSupply: TypedContractMethod<[], [bigint], "view">;

  mintCurrency: TypedContractMethod<
    [amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  poolBalance: TypedContractMethod<[], [bigint], "view">;

  sell: TypedContractMethod<
    [_amount: BigNumberish, _destination: AddressLike],
    [void],
    "payable"
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
    nameOrSignature: "MAX_POOL_BALANCE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "burnCurrency"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "buy"
  ): TypedContractMethod<[_destination: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "calculateBuyAmount"
  ): TypedContractMethod<
    [currentTokenSupply: BigNumberish, ethAmount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calculateSellPrice"
  ): TypedContractMethod<
    [currentTokenSupply: BigNumberish, tokenAmount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "curveExponent"
  ): TypedContractMethod<[], [bigint], "view">;
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
    nameOrSignature: "getIsCurveClosed"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "getOwnCurrencyBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialPricePerToken"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isCurveClosed"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "maxTotalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mintCurrency"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "poolBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sell"
  ): TypedContractMethod<
    [_amount: BigNumberish, _destination: AddressLike],
    [void],
    "payable"
  >;
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

  getEvent(
    key: "DidSendAsyncCall"
  ): TypedContractEvent<
    DidSendAsyncCallEvent.InputTuple,
    DidSendAsyncCallEvent.OutputTuple,
    DidSendAsyncCallEvent.OutputObject
  >;
  getEvent(
    key: "SuccessfulyMinted"
  ): TypedContractEvent<
    SuccessfulyMintedEvent.InputTuple,
    SuccessfulyMintedEvent.OutputTuple,
    SuccessfulyMintedEvent.OutputObject
  >;
  getEvent(
    key: "ToPurchaseAmount"
  ): TypedContractEvent<
    ToPurchaseAmountEvent.InputTuple,
    ToPurchaseAmountEvent.OutputTuple,
    ToPurchaseAmountEvent.OutputObject
  >;

  filters: {
    "DidSendAsyncCall(address,uint256,uint256)": TypedContractEvent<
      DidSendAsyncCallEvent.InputTuple,
      DidSendAsyncCallEvent.OutputTuple,
      DidSendAsyncCallEvent.OutputObject
    >;
    DidSendAsyncCall: TypedContractEvent<
      DidSendAsyncCallEvent.InputTuple,
      DidSendAsyncCallEvent.OutputTuple,
      DidSendAsyncCallEvent.OutputObject
    >;

    "SuccessfulyMinted(address,uint256,uint256)": TypedContractEvent<
      SuccessfulyMintedEvent.InputTuple,
      SuccessfulyMintedEvent.OutputTuple,
      SuccessfulyMintedEvent.OutputObject
    >;
    SuccessfulyMinted: TypedContractEvent<
      SuccessfulyMintedEvent.InputTuple,
      SuccessfulyMintedEvent.OutputTuple,
      SuccessfulyMintedEvent.OutputObject
    >;

    "ToPurchaseAmount(address,uint256,uint256)": TypedContractEvent<
      ToPurchaseAmountEvent.InputTuple,
      ToPurchaseAmountEvent.OutputTuple,
      ToPurchaseAmountEvent.OutputObject
    >;
    ToPurchaseAmount: TypedContractEvent<
      ToPurchaseAmountEvent.InputTuple,
      ToPurchaseAmountEvent.OutputTuple,
      ToPurchaseAmountEvent.OutputObject
    >;
  };
}
