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
https://github.com/Badger-Finance/badger-subgraph/tree/setts - 7222239bde5a6ad342b969070c4f6919db028d75
https://github.com/axejintao/badger-dao - 45d94148c29de95146656d7c88bf938836085697
https://github.com/yearn/yearn-subgraph - 8e946556c7eddbbb22ebd060f5ccc6f504b85bf1

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

- 1- no ported contracts.
- 2- just 2 contracts turned on.
- 3- nothing at all. shouldn't fail (no functions no contracts)