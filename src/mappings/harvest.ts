import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { Harvest } from '../../generated/nativeBadgerSett/Strategy'
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';
import { SgHarvest } from '../../generated/schema';
import { getCurrentNetwork } from '../utils/helpers/network';
import { Address, BigInt } from '@graphprotocol/graph-ts';
import { ZERO  } from '../utils/constants';
import { handleHarvest } from './strategy'

/////////////////// Harvest events handling ///////////////////////////// 
class CommonHarvestData {
  id: string;
  settAddress: string;
  totalFarmHarvested :BigInt;
  farmToRewards :BigInt;
  governancePerformanceFee :BigInt;
  strategistPerformanceFee :BigInt;
  toBadgerTree: BigInt; // not sure what this is.. TODO: ask
  timestamp :BigInt;
  blockNumber :BigInt;
}

function handleCommonHarvestEvent(commonHarvestData: CommonHarvestData): void
{
  let sgHarvest = SgHarvest.load(commonHarvestData.id)
  if (sgHarvest == null)
  {
    sgHarvest = new SgHarvest(commonHarvestData.id);

    sgHarvest.network = getCurrentNetwork();
    sgHarvest.sett = commonHarvestData.settAddress;

    sgHarvest.performanceFee = ZERO;
    sgHarvest.strategistFee = ZERO;
    sgHarvest.harvested = ZERO;
    sgHarvest.compounded = ZERO;
    sgHarvest.performance = ZERO;
    sgHarvest.strategist = ZERO;
    sgHarvest.withdrawFee = ZERO;  
    sgHarvest.pricePerFullShare = ZERO;
    sgHarvest.totalSupply = ZERO;
    sgHarvest.balance = ZERO;
  }

  sgHarvest.performanceFee = commonHarvestData.governancePerformanceFee;
  sgHarvest.strategistFee = commonHarvestData.strategistPerformanceFee;
  sgHarvest.harvested = sgHarvest.harvested.plus(commonHarvestData.totalFarmHarvested); 
  sgHarvest.compounded = sgHarvest.compounded.plus(commonHarvestData.toBadgerTree)
  sgHarvest.performance = sgHarvest.performance.plus(commonHarvestData.governancePerformanceFee);
  sgHarvest.strategist = sgHarvest.strategist.plus(commonHarvestData.strategistPerformanceFee);

  // TODO: need help on how to do this
  sgHarvest.withdrawFee = ZERO;  
  sgHarvest.pricePerFullShare = ZERO;
  sgHarvest.totalSupply = ZERO;
  sgHarvest.balance = ZERO;
  // TODO END

  sgHarvest.save();
}

function CreateEventFromFarmHarvest(event: FarmHarvest) : Harvest
{
  let harvest = new Harvest()
  //harvest.address = Address.fromHexString(event.address.toHexString());
  harvest.address = harvest.address
  harvest.transaction = event.transaction;
  harvest.transaction.hash = event.transaction.hash;
  harvest.block = event.block;
  harvest.block.timestamp = event.block.timestamp;
  harvest.block.number = event.block.number;
  return harvest;
}

function CreateEventFromSushiHarvest(event: HarvestState) : Harvest
{
  let harvest = new Harvest()
  //harvest.address = Address.fromHexString(event.address.toHexString());
  harvest.address = harvest.address
  harvest.transaction = event.transaction;
  harvest.transaction.hash = event.transaction.hash;
  harvest.block = event.block;
  harvest.block.timestamp = event.block.timestamp;
  harvest.block.number = event.block.number;
  return harvest;
}

export function handleFarmHarvest(event: FarmHarvest): void {

  let harvestID = event.address
  .toHexString()
  .concat('-')
  .concat(event.transaction.hash.toHexString())
  .concat('-')
  .concat(event.logIndex.toString());

  let commonHarvestData = new CommonHarvestData()
  commonHarvestData.id = harvestID;
  commonHarvestData.settAddress = event.address.toHexString();
  commonHarvestData.totalFarmHarvested = event.params.totalFarmHarvested;
  commonHarvestData.farmToRewards = event.params.farmToRewards;
  commonHarvestData.governancePerformanceFee = event.params.governancePerformanceFee;
  commonHarvestData.strategistPerformanceFee = event.params.strategistPerformanceFee;
  commonHarvestData.toBadgerTree = ZERO;
  commonHarvestData.timestamp = event.params.timestamp;
  commonHarvestData.blockNumber = event.params.blockNumber;
  handleCommonHarvestEvent(commonHarvestData);

  // TODO: fix error
  // Subgraph instance failed to run: failed to process trigger: block #11394867 (0x9adc…ebbe), 
  // transaction 13d7ea08f1141ea0cc080eca024d7adee6f4267da6cf400ca9e6e33c759e1f7f: 
  // Could not find ABI for contract "V1Contract", try adding it to the 'abis' section of the subgraph manifest wasm backtrace: 
  // 0: 0x1c4c - <unknown>!~lib/@graphprotocol/graph-ts/chain/ethereum/ethereum.SmartContract#call 
  // 1: 0x24ee - <unknown>!src/utils/helpers/yVault/yVault/getOrCreateVault 
  // 2: 0x3c69 - <unknown>!src/mappings/strategy/handleHarvest 
  // 3: 0x46cd - <unknown>!src/mappings/harvest/handleFarmHarvest , code: SubgraphSyncingFailure
  // Original Harvest Event from yVault
   handleHarvest(CreateEventFromFarmHarvest(event));
}

export function handleSushiHarvest(event: HarvestState): void {
  
  let sushiHarvestID = event.address
    .toHexString()
    .concat('-')
    .concat(event.transaction.hash.toHexString())
    .concat('-')
    .concat(event.logIndex.toString());

  let commonHarvestData = new CommonHarvestData()
  commonHarvestData.id = sushiHarvestID;
  commonHarvestData.settAddress = event.address.toHexString();
  commonHarvestData.totalFarmHarvested = event.params.xSushiHarvested;
  commonHarvestData.farmToRewards = event.params.totalxSushi;
  commonHarvestData.strategistPerformanceFee = event.params.toStrategist;
  commonHarvestData.governancePerformanceFee = event.params.toGovernance;
  commonHarvestData.toBadgerTree = event.params.toBadgerTree;
  commonHarvestData.timestamp = event.params.timestamp;
  commonHarvestData.blockNumber = event.params.blockNumber;
  handleCommonHarvestEvent(commonHarvestData);

  // Original Harvest Event from yVault
  handleHarvest(CreateEventFromSushiHarvest(event));
}

