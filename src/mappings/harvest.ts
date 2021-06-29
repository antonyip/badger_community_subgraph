import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';
import { SgHarvest, SgStrategy, SgTransfer } from '../../generated/schema';
import { getCurrentNetwork } from '../utils/network';
import { BigInt } from '@graphprotocol/graph-ts';
import { ZERO  } from '../utils/constants';

/////////////////// Harvest events handling ///////////////////////////// 
class CommonHarvestData {
  harvestid: string;
  settAddress: string;
  totalFarmHarvested :BigInt;
  farmToRewards :BigInt;
  governancePerformanceFee :BigInt;
  strategistPerformanceFee :BigInt;
  toBadgerTree: BigInt; // not sure what this is.. TODO: ask
  timestamp :BigInt;
  blockNumber :BigInt;

  strategyid: string;
}

function getOrCreateStrategy(strategyid: string) : SgStrategy
{
  let sgStrategy = SgStrategy.load(strategyid);
  if (sgStrategy == null)
  {
    sgStrategy = new SgStrategy(strategyid);
    sgStrategy.network = getCurrentNetwork();
    sgStrategy.sett = strategyid;
    sgStrategy.active = true;
  }
  return sgStrategy as SgStrategy;
}

function handleCommonHarvestEvent(commonHarvestData: CommonHarvestData): void
{
  let sgStrategy = getOrCreateStrategy(commonHarvestData.strategyid);
  
  let sgHarvest = SgHarvest.load(commonHarvestData.harvestid)
  if (sgHarvest == null)
  {
    sgHarvest = new SgHarvest(commonHarvestData.harvestid);

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

  sgStrategy.harvests.push(sgHarvest.id);
  sgStrategy.save();
  
}

export function handleFarmHarvest(event: FarmHarvest): void {

  let harvestID = event.address
  .toHexString()
  .concat('-')
  .concat(event.transaction.hash.toHexString())
  .concat('-')
  .concat(event.logIndex.toString());

  let commonHarvestData = new CommonHarvestData()
  commonHarvestData.harvestid = harvestID;
  commonHarvestData.settAddress = event.address.toHexString();
  commonHarvestData.totalFarmHarvested = event.params.totalFarmHarvested;
  commonHarvestData.farmToRewards = event.params.farmToRewards;
  commonHarvestData.governancePerformanceFee = event.params.governancePerformanceFee;
  commonHarvestData.strategistPerformanceFee = event.params.strategistPerformanceFee;
  commonHarvestData.toBadgerTree = ZERO;
  commonHarvestData.timestamp = event.params.timestamp;
  commonHarvestData.blockNumber = event.params.blockNumber;

  commonHarvestData.strategyid = event.address.toHexString().concat("-").concat(getCurrentNetwork());

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
  commonHarvestData.harvestid = sushiHarvestID;
  commonHarvestData.settAddress = event.address.toHexString();
  commonHarvestData.totalFarmHarvested = event.params.xSushiHarvested;
  commonHarvestData.farmToRewards = event.params.totalxSushi;
  commonHarvestData.strategistPerformanceFee = event.params.toStrategist;
  commonHarvestData.governancePerformanceFee = event.params.toGovernance;
  commonHarvestData.toBadgerTree = event.params.toBadgerTree;
  commonHarvestData.timestamp = event.params.timestamp;
  commonHarvestData.blockNumber = event.params.blockNumber;

  commonHarvestData.strategyid = event.address.toHexString().concat("-").concat(getCurrentNetwork());

  handleCommonHarvestEvent(commonHarvestData);
}

