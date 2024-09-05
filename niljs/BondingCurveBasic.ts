import {
  waitTillCompleted,
  HttpTransport,
  LocalECDSAKeySigner,
  PublicClient,
  WalletV1,
  generateRandomPrivateKey,
  Faucet,
} from "@nilfoundation/niljs";

require("dotenv").config();

import { encodeFunctionData, hexToBigInt } from "viem";

const bondingCurveBasicContract = require("../public/BondingCurveBasic.json");

const client = new PublicClient({
  transport: new HttpTransport({
    endpoint:
      "",
  }),
  shardId: 1,
});

const faucet = new Faucet(client);

const signer = new LocalECDSAKeySigner({
  privateKey:"0xfd1ce31f87781c4d558641d0fd75c5ff4356841ea4a2a57b1cb2649d76cd069e",
});

const pubkey = await signer.getPublicKey();

const wallet = new WalletV1({
  pubkey: pubkey,
  client,
  signer,
  address: "0x0001be097bfce61e9990b8983ccc9100cd4e62ad"
});

const walletAddress = wallet.getAddressHex();
console.log("Wallet Address:", walletAddress);

const sendingPurchase = await wallet.sendMessage({
  to: "0x0001A0412DBAA6aFb0c7C76FA7bF435f70f96152",
  value: 77777n,
  data: encodeFunctionData({
    abi: bondingCurveBasicContract.abi,
    functionName: "buy",
    args: [walletAddress],
  }),
  feeCredit: 5_000_000n,
});

waitTillCompleted(client, 1, sendingPurchase);
console.log("Message Hash for Purchase:", sendingPurchase);
