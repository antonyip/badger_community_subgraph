# Concept
https://hackmd.io/@ElS-qKWRRA-Eh0fa_T2YAw/badger-community-subgraph

Badger Community Subgraph

    The Graph is an indexing protocol for querying networks like Ethereum and IPFS. Anyone can build and publish open APIs, called subgraphs, making data easily accessible.

Construction of a Badger community subgraph will facilitate the surfacing of key protocol metrics in an easily queryable fashion. This will allow any third parties easy, fast, and robust protocol data access via GraphQL queries thus enabling them to build tooling around the protocol.
Contents

    Requirements
    Considerations
    Helpful Links
    Contacts

Requirements

Below is a proposed pseudocode description of a potential schema for a subgraph. This schema is open to any suggestions or requests - it is not final and some typings are used as examples rather than hard requirements or suggestions.

Network
  - chainId: id

Transfer
  - hash: id
  - network: Network
  - sett: Sett
  - from: string
  - to: string
  - amount: number

BalanceData
  - address: id
  - netDeposit: number
  - netDepositShares: number
  - grossDeposit: number
  - grossDepositShares: number
  - grossWithdraw: number
  - grossWithdrawShares: number

Harvest
  - hash: id
  - network: Network
  - sett: Sett
  "total token claimed"
  - harvested: number
  "total token reinvested"
  - compounded: number
  "total token performance fee"
  - performance: number
  "total token strategist fee"
  - strategist: number

Strategy
  - address: id
  - network: Network
  - sett: Sett
  - active: boolean
  - harvests: Harvest[]
  - performanceFee: number
  - strategistFee: number
  - withdrawFee: number

Sett
  - address: id
  - network: Network
  - transfers: Transfer[]
  - deposits: Transfer[]
  - withdraws: Transfer[]
  - balanceData: BalanceData
  - strategies: Strategy[]
  - harvests: Harvest[]
  - pricePerFullShare: number
  - totalSupply: number
  - balance: number

SettRegistry
  - address: id
  - network: Network
  - setts: Sett[]

SettBalance
  - userSettAddress: id
  - network: Network
  - sett: Sett
  - account: Account
  - balanceData: BalanceData

Account
  - address: id
  - network: Network
  - deposits: Transfer[]
  - withdraws: Transfer[]
  - transfers: Transfer[]
  - balances: SettBalance[]

AccountRegistry
  - registryId: id
  - network: Network
  - accounts: Account[]

Considerations

The above defintions are relatively straight forward outside of the network aspect. Combining multiple network datasource into a single subgraph is an aspect feasibility that has not been determined here. If not possible, the approach would remain the same, sans all network references or queries associated.

Should the multiple network graph be possible however it would be important to ensure that any datasourcse added or created ar associated with the appropriate networks. Any post processing for aggregation or otherwise will need to be done by the client for cross-chain statistics.

A final consideration is that the above assumes the existence of an on chain vault registry for programatic registration of datasources. A more manual approach via mustache templates may be required with some graph configuration setup in the interim while required on chain resources are not available.
Helpful Links

    Defining a Subgraph
    Badger API Subgraph
    Badger Rewards Subgraph
    Yearn Vault Registry
    Yearn Vault Registry Docs
    Dynamic Datasource Creation
    Templating & Multiple Network Deployments

Contacts

    Jintao (jintao#0713)
    Tritium (Tritium | BadgerDAO#4816)
