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
      "https://api.devnet.nil.foundation/api/vadim/9l43czwds1cyih8v49rk5j8cxy56qxz4",
  }),
  shardId: 1,
});

const faucet = new Faucet(client);

const signer = new LocalECDSAKeySigner({
  privateKey: process.env.PRIVATE_KEY as `0x${string}`,
});

const pubkey = await signer.getPublicKey();

const wallet = new WalletV1({
  pubkey: pubkey,
  client,
  signer,
  address: process.env.WALLET_ADDR as `0x${string}`
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
