const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// biome-ignore lint: type is not exported
module.exports = buildModule("BondingCurveModule", (m: any) => {
  
    const bondingCurveBasic = m.contract("BondingCurveBasic", ["TEST1", 1000000000000000000n]);

    return { bondingCurveBasic };
});
