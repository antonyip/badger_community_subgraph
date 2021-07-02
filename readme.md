# BadgerDAO Community Subgraphs
- Access the SubGraph here! -> https://thegraph.com/explorer/subgraph/antonyip/badger_community_subgraph

## Developer Dependencies
- curl
- nvm
- node
- npm
- npm install -g @graphprotocol/graph-cli
- yarn
- Access Key from https://thegraph.com/

# New Developer Startup
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
1. nvm install --lts
1. npm install --global yarn
1. npm install -g @graphprotocol/graph-cli
1. yarn
1. yarn codegen
1. yarn build
1. yarn deploy

# Contributing
- Add an issue to the issue tracker if would like something added to the subgraph.
    - Need a new contract being tracked
    - Need more stats being added to the subgraphs (e.g block_timestamps / transactions IDs)

# Building Documentation
- Edit the documentation in the documentation folder
- ```cd documentation && make```

# Others
### Wiki - Concept
- https://hackmd.io/@ElS-qKWRRA-Eh0fa_T2YAw/badger-community-subgraph

### Discord Discussions
- https://discord.gg/2Ma56eqx

### Gitcoin Bounty
- https://github.com/Badger-Finance/gitcoin/issues/4

### Other Project Commit hashes that I referenced
- https://github.com/Badger-Finance/badger-subgraph/tree/setts - 7222239bde5a6ad342b969070c4f6919db028d75
- https://github.com/axejintao/badger-dao - 45d94148c29de95146656d7c88bf938836085697
- https://github.com/yearn/yearn-subgraph - 8e946556c7eddbbb22ebd060f5ccc6f504b85bf1

# TODOS...
- bsc contracts - https://github.com/Badger-Finance/badger-subgraph/compare/bsc
- https://github.com/Badger-Finance/badger-system/blob/multichain/badger-deploy-bsc.json
- matic/polygon contracts
- "seperate" the subgraph.yaml so that it would be easier to read that file.
- write something to maintain "Geysers in consts"
- Figure out how to do testing on limited datasets as a full graph upload will take 15+ hours
- Add the rest of the strategies...
- https://duneanalytics.com/summmason/badger-dao
- https://duneanalytics.com/gosuto
