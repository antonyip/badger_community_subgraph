# BadgerDAO Community Subgraphs
Here for now..
https://thegraph.com/explorer/subgraph/antonyip/badger_community_subgraph

## Developer Dependcies
- curl
- nvm
- node
- npm
- npm install -g @graphprotocol/graph-cli
- yarn
    - yarn codegen
    - yarn build
- TODO: talk about access key from thegraph.com
    - yarn deploy

# New Startup
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
1. nvm install --lts
1. npm install --global yarn
1. npm install -g @graphprotocol/graph-cli
1. yarn
1. yarn codegen
1. yarn build
1. yarn deploy
 
### Users
- Just go to the following page and start triggering queries..
- https://thegraph.com/explorer/subgraph/antonyip/badger_community_subgraph

### Wiki - for now
- https://hackmd.io/@ElS-qKWRRA-Eh0fa_T2YAw/badger-community-subgraph

### Discord Discussions
- https://discord.gg/2Ma56eqx

### Gitcoin Bounty
- https://github.com/Badger-Finance/gitcoin/issues/4

### Other Project Commit hashes that I referenced
- https://github.com/Badger-Finance/badger-subgraph/tree/setts - 7222239bde5a6ad342b969070c4f6919db028d75
- https://github.com/axejintao/badger-dao - 45d94148c29de95146656d7c88bf938836085697
- https://github.com/yearn/yearn-subgraph - 8e946556c7eddbbb22ebd060f5ccc6f504b85bf1

### TODOS...
- What to do with
    - utils/helpers/
        - farm/harvest.ts
        - geyser/geyser.ts
        - sushi/harvest.ts
    - The contracts are still being used on badger, however, is there a upgrade path to the new yYearn/yVault system?
    - The contracts are hooked differently to src/mappings/oldFunctions.ts for now which do nothing.
- Intergrate new yYearn graphs?
    - https://github.com/yearn/yearn-vaults-v2-subgraph
- Change all the hooks (related to yVault) on subgraph.yaml 
    - so that we can maintain updates from yearn subgraphs and also add our own logics to our own subgraph
- Integrate 

- new addresses (ported contracts)
    - 0x2B5455aac8d64C14786c3a29858E43b5945819C0 - cvxcrv - ported
    - 0x53c8e199eb2cb7c01543c137078a038937a68e40 - cvx - ported
    - 0x55912d0cf83b75c492e761932abc4db4a5cb1b17 - pBTC - ported
    - 0x5dce29e92b1b939f8e8c60dcf15bde82a85be4a9 - bBTC - ported
    - 0x8c76970747afd5398e958bdfada4cf0b9fca16c4 - hBTC - ported
    - 0xBE08Ef12e4a553666291E9fFC24fCCFd354F2Dd2 - tricrypto - ported
    - 0xf349c0faa80fc1870306ac093f75934078e28991 - oBTC - ported

- bsc contracts (double checking all the network ids.. )
- matic/polygon contracts
- update entities: in subgraph.yaml
- "seperate" the subgraph.yaml so that it would be easier to read that file.
- UWE wants fees calculated
- write something to maintain "Geysers in consts"
- Figure out how to do testing on limited datasets as a full graph upload will take 12+ hours
- port this diff https://github.com/Badger-Finance/badger-subgraph/compare/bsc
### June 27 2021
- 1 no ported contracts. (failed)
- 2 just 2 contracts turned on. (success)
- 3 nothing at all. shouldn't fail (no functions no contracts) (success)

### June 28 2021
- 1 all contracts (no harvest)
- 2 all contracts (no settLogic) (failed)
    - Subgraph instance failed to run: Mapping aborted at ~lib/@graphprotocol/graph-ts/index.ts, line 811, column 4, with message: Value is not a BigInt. wasm backtrace: 0: 0x1afe - <unknown>!~lib/@graphprotocol/graph-ts/index/Value#toBigInt 1: 0x403c - <unknown>!src/mappings/harvest/handleCommonHarvestEvent 2: 0x415c - <unknown>!src/mappings/harvest/handleFarmHarvest in handler `handleFarmHarvest` at block #11394867 (9adcc70ecca2d172fa3c51c6e8b7d95c4b6699861c69fe59370f93051d3bebbe), code: SubgraphSyncingFailure

    - first harvest to be triggered.
	- 0x13d7ea08f1141ea0cc080eca024d7adee6f4267da6cf400ca9e6e33c759e1f7f	Harvest	11394867	204 days 18 hrs ago	Badger: Keeper	 IN 	0xaae82e3c89e15e6f26f60724f115d5012363e030	0 Ether	0.0047426

- 3 all contracts (no harvest | settLogic | geyser)

### try 2
- 2 all contracts (all logic)

### June 28 2021
- 3 (yVault harvest added back) (todo)

### FarmHarvestExample - FarmHarvest
- https://etherscan.io/tx/0x01351662598d1e8dcede81590e6de2c81efdd3e72829b5c9c21e0229e2738dbc#eventlog
- totalFarmHarvested :12140554982521443801
- farmToRewards :9712443986017155041
- governancePerformanceFee :1214055498252144380
- strategistPerformanceFee :1214055498252144380
- timestamp :1608496137
- blockNumber :11492395

### SushiHarvestExample - HarvestState
- https://etherscan.io/tx/0x63f82f4dca325e3e99b0ea16b81b7b36c831929e9832731efd8fd818370d1590#eventlog
- xSushiHarvested :51590618723525859111
- totalxSushi :166209435412238762114
- toStrategist :16620943541223876211
- toGovernance :16620943541223876211
- toBadgerTree :132967548329791009692
- timestamp :1624310799
- blockNumber :12680032