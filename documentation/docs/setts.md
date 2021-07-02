# BadgerDAO related Setts
## What is a Sett
- https://badger.wiki/setts

## List of Setts
### BadgerDAO
BADGER
DIGG

### Yearn
WBTC

### SushiSwap
SLP-IBBTC-WBTC
SLP-WBTC-ETH
SLP-BADGER-WBTC
SLP-DIGG-WBTC

### Farm.Harvest
- crvrenWBTC
    - Token - 0x49849C98ae39Fff122806C06791Fa73784FB3675
    - LP - 0xAf5A1DECfa95BAF63E0084a35c62592B774A2A87

### crv ?? how does this work?
- crvrenWBTC - [https://etherscan.io/token/0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545](https://etherscan.io/token/0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545)
- crvsBTC - [https://etherscan.io/token/0xd04c48A53c111300aD41190D63681ed3dAd998eC](https://etherscan.io/token/0xd04c48A53c111300aD41190D63681ed3dAd998eC)
- crvtBTC - [https://etherscan.io/token/0xb9D076fDe463dbc9f915E5392F807315Bf940334](https://etherscan.io/token/0xb9D076fDe463dbc9f915E5392F807315Bf940334)

### Uniswap
- DIGG-WBTC
- BADGER-WBTC
    - Token - 0xcD7989894bc033581532D2cd88Da5db0A4b12859
    - LP - 0x235c9e24D3FB2FAFd58a2E49D454Fdcd2DBf7FF1

### Convex (Guarded for now)
CVX
cvxCRV
crvTricrypto
crvhBTC
crvpBTC
crvoBTC
crvbBTC

https://github.com/Badger-Finance/badger-system/blob/master/deploy-final.json
"sett_system": {
    "controllers": {
        "native": "0x63cF44B2548e4493Fd099222A1eC79F3344D9682",
        "harvest": "0x30392694C25fbBE5C026CF846e9b6525A2aC3eC8",
        "experimental": "0x9b4efA18c0c6b4822225b81D150f3518160f8609"
    },
    "vaults": {
        "native.badger": "0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28",
        "native.renCrv": "0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545",
        "native.sbtcCrv": "0xd04c48A53c111300aD41190D63681ed3dAd998eC",
        "native.tbtcCrv": "0xb9D076fDe463dbc9f915E5392F807315Bf940334",
        "native.uniBadgerWbtc": "0x235c9e24D3FB2FAFd58a2E49D454Fdcd2DBf7FF1",
        "harvest.renCrv": "0xAf5A1DECfa95BAF63E0084a35c62592B774A2A87",
        "native.sushiWbtcEth": "0x758A43EE2BFf8230eeb784879CdcFF4828F2544D",
        "native.sushiBadgerWbtc": "0x1862A18181346EBd9EdAf800804f89190DeF24a5",
        "native.digg": "0x7e7E112A68d8D2E221E11047a72fFC1065c38e1a",
        "native.uniDiggWbtc": "0xC17078FDd324CC473F8175Dc5290fae5f2E84714",
        "native.sushiDiggWbtc": "0x88128580ACdD9c04Ce47AFcE196875747bF2A9f6",
        "yearn.wbtc": "0x4b92d19c11435614cd49af1b589001b7c08cd4d5",
        "experimental.sushiIBbtcWbtc": "0x8a8ffec8f4a0c8c9585da95d9d97e8cd6de273de",
        "experimental.digg": "0x608b6D82eb121F3e5C0baeeD32d81007B916E83C"
    },
    "vault_artifacts": {
        "native.badger": "Sett",
        "native.renCrv": "Sett",
        "native.sbtcCrv": "Sett",
        "native.tbtcCrv": "Sett",
        "native.uniBadgerWbtc": "Sett",
        "harvest.renCrv": "Sett",
        "native.sushiWbtcEth": "Sett",
        "native.sushiBadgerWbtc": "Sett",
        "native.digg": "DiggSett",
        "native.uniDiggWbtc": "Sett",
        "native.sushiDiggWbtc": "Sett",
        "yearn.wbtc": "AffiliateTokenGatedUpgradeable",
        "experimental.sushiIBbtcWbtc": "Sett",
        "experimental.digg": "StabilizeDiggSett"
    },
    "strategies": {
        "native.badger": "0x75b8E21BD623012Efb3b69E1B562465A68944eE6",
        "native.renCrv": "0x444B860128B7Bf8C0e864bDc3b7a36a940db7D88",
        "native.sbtcCrv": "0x3Efc97A8e23f463e71Bf28Eb19690d097797eb17",
        "native.tbtcCrv": "0xE2fA197eAA5C726426003074147a08beaA59403B",
        "native.uniBadgerWbtc": "0x95826C65EB1f2d2F0EDBb7EcB176563B61C60bBf",
        "harvest.renCrv": "0xaaE82E3c89e15E6F26F60724f115d5012363e030",
        "native.sushiWbtcEth": "0x7A56d65254705B4Def63c68488C0182968C452ce",
        "native.sushiBadgerWbtc": "0x3a494D79AA78118795daad8AeFF5825C6c8dF7F1",
        "native.digg": "0x4a8651F2edD68850B944AD93f2c67af817F39F62",
        "native.uniDiggWbtc": "0xadc8d7322f2E284c1d9254170dbe311E9D3356cf",
        "native.sushiDiggWbtc": "0xaa8dddfe7DFA3C3269f1910d89E4413dD006D08a",
        "experimental.sushiIBbtcWbtc": "0xf4146A176b09C664978e03d28d07Db4431525dAd",
        "experimental.digg": "0xA6af1B913E205B8E9B95D3B30768c0989e942316"
    },
    "strategy_artifacts": {
        "native.badger": "StrategyBadgerRewards",
        "native.renCrv": "StrategyCurveGaugeRenBtcCrv",
        "native.sbtcCrv": "StrategyCurveGaugeSbtcCrv",
        "native.tbtcCrv": "StrategyCurveGaugeTbtcCrv",
        "native.uniBadgerWbtc": "StrategyBadgerLpMetaFarm",
        "harvest.renCrv": "StrategyHarvestMetaFarm",
        "native.sushiWbtcEth": "StrategySushiLpOptimizer",
        "native.sushiBadgerWbtc": "StrategySushiBadgerWbtc",
        "native.digg": "StrategyDiggRewards",
        "native.uniDiggWbtc": "StrategyDiggLpMetaFarm",
        "experimental.sushiIBbtcWbtc": "StrategySushiLpOptimizer",
        "native.sushiDiggWbtc": "StrategySushiDiggWbtcLpOptimizer",
        "experimental.digg": "StabilizeStrategyDiggV1"
    },
    "rewards": {
        "native.badger": "0xBD9c69654B8F3E5978DFd138B00cB0Be29F28cCf",
        "native.uniBadgerWbtc": "0x0c79406977314847A9545B11783635432D7fe019",
        "native.sushiBadgerWbtc": "0xd34C1d3853214bf049B760Ef48A580bfa7A9c8a1",
        "native.digg": "0xec48D3eD49432FFE64f39b6EB559d0fa7AC9cc90",
        "native.uniDiggWbtc": "0xB45e51485ff078E85D9fF29c3AC0CbD9351cEBb1",
        "native.sushiDiggWbtc": "0xF2E434772FC12705E823B2683703ee6cd8d19744"
    }
}




