#!/bin/bash
rm -rf ignition/deployments
npx hardhat ignition deploy ./ignition/modules/BondingCurveBasic.ts --network nil
bun run niljs/BondingCurveBasic.ts 

