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
  privateKey:"0x427e79d7407699897fe0c7bfccb2b5242272c66a61e03c138634b7b5777164c0",
});

const pubkey = await signer.getPublicKey();

const wallet = new WalletV1({
  pubkey: pubkey,
  client,
  signer,
  address: "0x00012616767c73916336150f250c51fdfd39d263"
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
