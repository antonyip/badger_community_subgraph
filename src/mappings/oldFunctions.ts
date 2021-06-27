import {
    BadgerGeyser,
    Staked,
    Unstaked,
  } from '../../generated/nativeBadgerGeyser/BadgerGeyser';

import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';

//Staked(indexed address,uint256,uint256,indexed uint256,indexed uint256,bytes)
export function handleStaked(event: Staked): void {
}

//Unstaked(indexed address,uint256,uint256,indexed uint256,indexed uint256,bytes)
export function handleUnstaked(event: Unstaked): void {
}

//FarmHarvest(uint256,uint256,uint256,uint256,uint256,uint256)
export function handleFarmHarvest(event: FarmHarvest): void {
}

//HarvestState(uint256,uint256,uint256,uint256,uint256,uint256,uint256)
export function handleSushiHarvest(event: HarvestState): void {
}
