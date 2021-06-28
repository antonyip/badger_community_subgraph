import {
    BadgerGeyser,
    Staked,
    Unstaked,
  } from '../../generated/nativeBadgerGeyser/BadgerGeyser';

import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';
import { SgHarvest, SgTransfer, SgGeyser, SgStrategy } from '../../generated/schema';
import { getEthNetwork } from '../utils/helpers/SG_network_helpers';
import { BigDecimal, BigInt, Address} from '@graphprotocol/graph-ts';
import { ZERO } from '../utils/constants';

/////////////////// Geyser events handling ///////////////////////////// 

export function getOrCreateGeyser(add: Address) : SgGeyser {
  let sgGeyser = SgGeyser.load(add.toHexString())
  if (sgGeyser == null)
  {
    sgGeyser = new SgGeyser(add.toHexString())
    sgGeyser.network = getEthNetwork();
    sgGeyser.netDeposit = ZERO;
    sgGeyser.grossDeposit = ZERO;
    sgGeyser.grossWithdraw = ZERO;
  }
  return sgGeyser as SgGeyser
}

export function handleStaked(event: Staked): void {
  let stakeId = event.address
    .toHexString()
    .concat('-')
    .concat(event.transaction.hash.toHexString())
    .concat('-')
    .concat(event.logIndex.toString());

  let sgGeyser = getOrCreateGeyser(event.address);

  // make a transaction
  let sgTransfer = new SgTransfer(stakeId);
  sgTransfer.network = getEthNetwork();
  sgTransfer.from = event.transaction.from.toHexString();
  sgTransfer.to = event.transaction.to.toHexString();
  sgTransfer.sett = event.address.toHexString()
  sgTransfer.amount = event.transaction.value;
  sgTransfer.save();

  // update geyser
  sgGeyser.deposits.push(sgTransfer.id);
  sgGeyser.netDeposit.plus(event.params.amount);
  sgGeyser.grossDeposit.plus(event.params.amount);
  sgGeyser.save();
}

export function handleUnstaked(event: Unstaked): void {
  
  let unstakeId = event.address
  .toHexString()
  .concat('-')
  .concat(event.transaction.hash.toHexString())
  .concat('-')
  .concat(event.logIndex.toString());

  let sgGeyser = getOrCreateGeyser(event.address);

  // make a transaction
  let sgTransfer = new SgTransfer(unstakeId);
  sgTransfer.network = getEthNetwork();
  sgTransfer.from = event.transaction.from.toHexString();
  sgTransfer.to = event.transaction.to.toHexString();
  sgTransfer.sett = event.address.toHexString()
  sgTransfer.amount = event.transaction.value;
  sgTransfer.save();

  // update geyser
  sgGeyser.withdraws.push(sgTransfer.id);
  sgGeyser.netDeposit.minus(event.params.amount);
  sgGeyser.grossWithdraw.plus(event.params.amount);
  sgGeyser.save();
}


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
