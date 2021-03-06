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

https://github.com/Badger-Finance/badger-system/blob/develop/deploy-final.json
```
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
            "experimental.digg": "0x608b6D82eb121F3e5C0baeeD32d81007B916E83C",
            "native.hbtcCrv": "0x8c76970747afd5398e958bdfada4cf0b9fca16c4",
            "native.pbtcCrv": "0x55912d0cf83b75c492e761932abc4db4a5cb1b17",
            "native.obtcCrv": "0xf349c0faa80fc1870306ac093f75934078e28991",
            "native.bbtcCrv": "0x5dce29e92b1b939f8e8c60dcf15bde82a85be4a9",
            "native.tricrypto": "0xBE08Ef12e4a553666291E9fFC24fCCFd354F2Dd2",
            "native.cvxCrv": "0x2B5455aac8d64C14786c3a29858E43b5945819C0",
            "native.cvx": "0x53c8e199eb2cb7c01543c137078a038937a68e40"
        },
        "vault_artifacts": {
            "native.badger": "Sett",
            "native.renCrv": "Sett",
            "native.convexRenCrv": "Sett",
            "native.sbtcCrv": "Sett",
            "native.convexSbtcCrv": "Sett",
            "native.tbtcCrv": "Sett",
            "native.convexTbtcCrv": "Sett",
            "native.uniBadgerWbtc": "Sett",
            "harvest.renCrv": "Sett",
            "native.sushiWbtcEth": "Sett",
            "native.sushiBadgerWbtc": "Sett",
            "native.digg": "DiggSett",
            "native.uniDiggWbtc": "Sett",
            "native.sushiDiggWbtc": "Sett",
            "yearn.wbtc": "AffiliateTokenGatedUpgradeable",
            "experimental.sushiIBbtcWbtc": "Sett",
            "experimental.digg": "StabilizeDiggSett",
            "native.hbtcCrv": "SettV3",
            "native.pbtcCrv": "SettV3",
            "native.obtcCrv": "SettV3",
            "native.bbtcCrv": "SettV3",
            "native.tricrypto": "SettV3",
            "native.cvxCrv": "SettV4",
            "native.cvx": "SettV4"
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
            "experimental.digg": "0xA6af1B913E205B8E9B95D3B30768c0989e942316",
            "native.hbtcCrv": "0xff26f400e57bf726822eacbb64fa1c52f1f27988",
            "native.pbtcCrv": "0x1C1fD689103bbFD701b3B7D41A3807F12814033D",
            "native.obtcCrv": "0x2bb864cdb4856ab2d148c5ca52dd7ccec126d138",
            "native.bbtcCrv": "0x4f3e7a4566320b2709fd1986f2e9f84053d3e2a0",
            "native.tricrypto": "0x05ec4356e1acd89cc2d16adc7415c8c95e736ac1",
            "native.cvxCrv": "0x826048381d65a65DAa51342C51d464428d301896",
            "native.cvx": "0xBCee2c6CfA7A4e29892c3665f464Be5536F16D95"
        },
        "strategies_registry": {
            "native.renCrv": {
                "Curve": "0x444B860128B7Bf8C0e864bDc3b7a36a940db7D88",
                "StrategyConvexLpOptimizer": "0x8cbb86a7e0780a6fbefeec108f9b4b0aa8193e24",
                "StrategyConvexStakingOptimizer": "0x6582a5b139fc1c6360846efdc4440d51aad4df7b"
            },
            "native.sbtcCrv": {
                "Curve": "0x3Efc97A8e23f463e71Bf28Eb19690d097797eb17",
                "StrategyConvexLpOptimizer": "0xaa9b716ccd717761f40479cd81f8e3a5a7b4cad7",
                "StrategyConvexStakingOptimizer": "0xf1ded284e891943b3e9c657d7fc376b86164ffc2"
            },
            "native.tbtcCrv": {
                "Curve": "0xE2fA197eAA5C726426003074147a08beaA59403B",
                "StrategyConvexLpOptimizer": "0x1ac31c470b90e366c70efc1ac28d5d7fa2f1dbe1",
                "StrategyConvexStakingOptimizer": "0x522bb024c339a12be1a47229546f288c40b62d29"
            },
            "native.hbtcCrv": {
                "Test": "0xca4b98ca964713287a36224364dbed15c9b7abc3",
                "StrategyConvexStakingOptimizer": "0xff26f400e57bf726822eacbb64fa1c52f1f27988"
            },
            "native.pbtcCrv": {
                "Test": "0xcaed73bcdd45d2469b1287a7c21d7a31b2bb7b35",
                "StrategyConvexStakingOptimizer": "0x1c1fd689103bbfd701b3b7d41a3807f12814033d"
            },
            "native.obtcCrv": {
                "Test": "0xdbda6fa60c48a7da8e0c7ae25a20fd089c0f6a1f",
                "StrategyConvexStakingOptimizer": "0x2bb864cdb4856ab2d148c5ca52dd7ccec126d138"
            },
            "native.bbtcCrv": {
                "Test": "0x353200ed9f63fa7804816b336d50e9f0d7c88d2c",
                "StrategyConvexStakingOptimizer": "0x4f3e7a4566320b2709fd1986f2e9f84053d3e2a0"
            }
        },
        "strategy_artifacts": {
            "native.badger": "StrategyBadgerRewards",
            "native.renCrv": "StrategyConvexStakingOptimizer",
            "native.sbtcCrv": "StrategyConvexStakingOptimizer",
            "native.tbtcCrv": "StrategyConvexStakingOptimizer",
            "native.uniBadgerWbtc": "StrategyBadgerLpMetaFarm",
            "harvest.renCrv": "StrategyHarvestMetaFarm",
            "native.sushiWbtcEth": "StrategySushiLpOptimizer",
            "native.sushiBadgerWbtc": "StrategySushiBadgerWbtc",
            "native.digg": "StrategyDiggRewards",
            "native.uniDiggWbtc": "StrategyDiggLpMetaFarm",
            "experimental.sushiIBbtcWbtc": "StrategySushiLpOptimizer",
            "native.sushiDiggWbtc": "StrategySushiDiggWbtcLpOptimizer",
            "experimental.digg": "StabilizeStrategyDiggV1",
            "native.hbtcCrv": "StrategyConvexStakingOptimizer",
            "native.pbtcCrv": "StrategyConvexStakingOptimizer",
            "native.obtcCrv": "StrategyConvexStakingOptimizer",
            "native.bbtcCrv": "StrategyConvexStakingOptimizer",
            "native.tricrypto": "StrategyConvexStakingOptimizer",
            "native.cvxCrv": "StrategyCvxCrvHelper",
            "native.cvx": "StrategyCvxHelper"
        },
        "rewards": {
            "native.badger": "0xBD9c69654B8F3E5978DFd138B00cB0Be29F28cCf",
            "native.uniBadgerWbtc": "0x0c79406977314847A9545B11783635432D7fe019",
            "native.sushiBadgerWbtc": "0xd34C1d3853214bf049B760Ef48A580bfa7A9c8a1",
            "native.digg": "0xec48D3eD49432FFE64f39b6EB559d0fa7AC9cc90",
            "native.uniDiggWbtc": "0xB45e51485ff078E85D9fF29c3AC0CbD9351cEBb1",
            "native.sushiDiggWbtc": "0xF2E434772FC12705E823B2683703ee6cd8d19744"
        },
        "guestLists": {
            "experimental.digg": "0x28E07714500Bc44f3F324e4Cfcffb0E9358EC41C",
            "experimental.renBtc": "0x9FC48e61B6a75eE263ca160aCF3288A99238719E"
        }
    },

new Curve Sets
"ibbtc": {
        "badgerPeak": "0x41671BA1abcbA387b9b2B752c205e22e916BE6e3",
        "bcrvRenWBTC": "0x6dEf55d2e18486B9dDfaA075bc4e4EE0B28c1545",
        "bcrvRenWSBTC": "0xd04c48A53c111300aD41190D63681ed3dAd998eC",
        "btbtc_sbtcCrv": "0xb9D076fDe463dbc9f915E5392F807315Bf940334",
        "byvWbtcPeak": "0x825218beD8BE0B30be39475755AceE0250C50627",
        "byvWbtc": "0x4b92d19c11435614CD49Af1b589001b7c08cD4D5",
        "bBtc": "0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F",
        "core": "0x2A8facc9D49fBc3ecFf569847833C380A13418a8"
    }


```