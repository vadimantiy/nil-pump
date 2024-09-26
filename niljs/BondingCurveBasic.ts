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
const deployedAddresses = require("../ignition/deployments/chain-0/deployed_addresses.json")

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
  address: "0x0001bce0eda86c0dde1a91533c1372085da85cc5"
});

const walletAddress = wallet.getAddressHex();
console.log("Wallet Address:", walletAddress);
const contractAddress = deployedAddresses["BondingCurveModule#BondingCurveBasic"];
console.log("Contract address = ", contractAddress);

const sendingPurchase = await wallet.sendMessage({
  to: contractAddress,
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
