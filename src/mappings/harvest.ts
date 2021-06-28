import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';
import { SgHarvest } from '../../generated/schema';
import { getEthNetwork } from '../utils/helpers/network';
import { BigInt, } from '@graphprotocol/graph-ts';
import { ZERO } from '../utils/constants';
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
  }

  sgHarvest.id = commonHarvestData.id;
  sgHarvest.network = getEthNetwork();
  sgHarvest.sett = commonHarvestData.settAddress;
  sgHarvest.performanceFee = commonHarvestData.governancePerformanceFee;
  sgHarvest.strategistFee = commonHarvestData.strategistPerformanceFee;
  // TODO: need help on how to do this
  sgHarvest.withdrawFee = ZERO;
  sgHarvest.harvested = ZERO; 
  sgHarvest.compounded = ZERO;
  sgHarvest.performance = ZERO;
  sgHarvest.strategist = ZERO;
  sgHarvest.pricePerFullShare = ZERO;
  sgHarvest.totalSupply = ZERO;
  sgHarvest.balance = ZERO;
  sgHarvest.save();
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
}
