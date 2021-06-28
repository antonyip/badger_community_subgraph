import {
    BadgerGeyser,
    Staked,
    Unstaked,
  } from '../../generated/nativeBadgerGeyser/BadgerGeyser';

import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';
import { SgTransfer } from '../../generated/schema';
import { getEthNetwork, sgGetOrCreateAccount } from '../utils/helpers/SG_network_helpers';

// What are all these functions? 
// Previous Implementation just register them as some events but nothing was aggrigated?

//Staked (index_topic_1 address user, uint256 amount, uint256 total, index_topic_2 uint256 timestamp, index_topic_3 uint256 blockNumber, bytes data)
export function handleStaked(event: Staked): void {
/*
  // Generate a new stake for the geyser
  let stakeId = event.address
    .toHexString()
    .concat('-')
    .concat(event.transaction.hash.toHexString())
    .concat('-')
    .concat(event.logIndex.toString());

  let geyser = getOrCreateGeyser(event.address);
  geyser.save();

  let stake = getOrCreateGeyserStakedEvent(stakeId, geyser.id, event);
  stake.save();
*/
}

//Unstaked (index_topic_1 address user, uint256 amount, uint256 total, index_topic_2 uint256 timestamp, index_topic_3 uint256 blockNumber, bytes data)
export function handleUnstaked(event: Unstaked): void {
  /*
  let unstakeId = event.address
  .toHexString()
  .concat('-')
  .concat(event.transaction.hash.toHexString())
  .concat('-')
  .concat(event.logIndex.toString());

  let geyser = getOrCreateGeyser(event.address);
  geyser.save();

  // Update accounting, processing unstake according to LIFO rules
  // geyser.accounts
  // Get the account for the user in question
  // Remove from most recent stakes first
  let unstake = getOrCreateGeyserUnstakedEvent(unstakeId, geyser.id, event);
  unstake.save();
  */
}

//FarmHarvest(uint256,uint256,uint256,uint256,uint256,uint256)
export function handleFarmHarvest(event: FarmHarvest): void {
  /*
  let farmHarvestEvent = FarmHarvestEvent.load(id.toString());
  if (farmHarvestEvent == null) {
    farmHarvestEvent = new FarmHarvestEvent(id.toString());
  }
  farmHarvestEvent.totalFarmHarvested = event.params.totalFarmHarvested;
  farmHarvestEvent.farmToRewards = event.params.farmToRewards;
  farmHarvestEvent.governancePerformanceFee = event.params.governancePerformanceFee;
  farmHarvestEvent.strategistPerformanceFee = event.params.strategistPerformanceFee;
  farmHarvestEvent.timestamp = event.params.timestamp;
  farmHarvestEvent.blockNumber = event.params.blockNumber;

  return farmHarvestEvent as FarmHarvestEvent;
  */
}

//HarvestState(uint256,uint256,uint256,uint256,uint256,uint256,uint256)
export function handleSushiHarvest(event: HarvestState): void {
  /*
  let sushiHarvestID = event.address
    .toHexString()
    .concat('-')
    .concat(event.transaction.hash.toHexString())
    .concat('-')
    .concat(event.logIndex.toString());

  let sushiHarvest = getOrCreateSushiHarvestEvent(sushiHarvestID, event);
  sushiHarvest.save();
  */
}
