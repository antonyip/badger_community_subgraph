import { FarmHarvest } from '../../generated/harvestFarm/StrategyHarvestMetaFarm';
import { HarvestState } from '../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer';
import { SgHarvest, SgStrategy, SgTransfer } from '../../generated/schema';
import { getCurrentNetwork } from '../utils/network';
import { BigInt , Address } from '@graphprotocol/graph-ts';
import { ZERO  } from '../utils/constants';

// Mappings from HarvestToContracts - Start
// TODO: Think of a better way to handle this construct
/*
name: harvestFarm
address: "0xaaE82E3c89e15E6F26F60724f115d5012363e030"
abi: StrategyHarvestMetaFarm

name: harvestSushiWbtcBadger
address: "0x3a494D79AA78118795daad8AeFF5825C6c8dF7F1"
abi: StrategySushiBadgerWbtc

name: harvestSushiIbBTCWbtc
address: "0xf4146A176b09C664978e03d28d07Db4431525dAd"
abi: StrategySushiLpOptimizer

name: harvestSushiWbtcEth
address: "0x7a56d65254705b4def63c68488c0182968c452ce"
abi: StrategySushiLpOptimizer

name: harvestSushiWbtcDigg
address: "0x16626fd20b8e1541fdb85d9e63def368b374fa75"
abi: StrategySushiDiggWbtcLpOptimizer

*/
import { StrategyHarvestMetaFarm } from "../../generated/harvestFarm/StrategyHarvestMetaFarm"
import { StrategySushiBadgerWbtc } from "../../generated/harvestSushiWbtcBadger/StrategySushiBadgerWbtc"
import { StrategySushiLpOptimizer } from "../../generated/harvestSushiIbBTCWbtc/StrategySushiLpOptimizer"
//import { StrategySushiLpOptimizer } from "../../generated/harvestSushiWbtcEth/StrategySushiLpOptimizer"
import { StrategySushiDiggWbtcLpOptimizer } from "../../generated/harvestSushiWbtcDigg/StrategySushiDiggWbtcLpOptimizer"

class CommonStrategyData{ 
  performanceFee: BigInt;
  strategyFee: BigInt;
  withdrawFee: BigInt;
};

function HarvestAddressToType(addr: string) : CommonStrategyData
{
  let commonStrategyData = new CommonStrategyData();
  if (addr == "0xaaE82E3c89e15E6F26F60724f115d5012363e030")
  {
    let contract = StrategyHarvestMetaFarm.bind(Address.fromString(addr));

    let performanceFee = contract.try_performanceFeeGovernance();
    let strategyFee = contract.try_performanceFeeStrategist();
    let withdrawFee = contract.try_withdrawalFee();

    commonStrategyData.performanceFee = !performanceFee.reverted ? performanceFee.value : ZERO;
    commonStrategyData.strategyFee = !strategyFee.reverted ? strategyFee.value : ZERO;
    commonStrategyData.withdrawFee = !withdrawFee.reverted ? withdrawFee.value : ZERO;
  }

  if (addr == "0x3a494D79AA78118795daad8AeFF5825C6c8dF7F1")
  {
    let contract = StrategySushiBadgerWbtc.bind(Address.fromString(addr));

    let performanceFee = contract.try_performanceFeeGovernance();
    let strategyFee = contract.try_performanceFeeStrategist();
    let withdrawFee = contract.try_withdrawalFee();

    commonStrategyData.performanceFee = !performanceFee.reverted ? performanceFee.value : ZERO;
    commonStrategyData.strategyFee = !strategyFee.reverted ? strategyFee.value : ZERO;
    commonStrategyData.withdrawFee = !withdrawFee.reverted ? withdrawFee.value : ZERO;
  }

  if (addr == "0xf4146A176b09C664978e03d28d07Db4431525dAd")
  {
    let contract = StrategySushiLpOptimizer.bind(Address.fromString(addr));

    let performanceFee = contract.try_performanceFeeGovernance();
    let strategyFee = contract.try_performanceFeeStrategist();
    let withdrawFee = contract.try_withdrawalFee();

    commonStrategyData.performanceFee = !performanceFee.reverted ? performanceFee.value : ZERO;
    commonStrategyData.strategyFee = !strategyFee.reverted ? strategyFee.value : ZERO;
    commonStrategyData.withdrawFee = !withdrawFee.reverted ? withdrawFee.value : ZERO;
  }

  if (addr == "0x7a56d65254705b4def63c68488c0182968c452ce")
  {
    let contract = StrategySushiLpOptimizer.bind(Address.fromString(addr));

    let performanceFee = contract.try_performanceFeeGovernance();
    let strategyFee = contract.try_performanceFeeStrategist();
    let withdrawFee = contract.try_withdrawalFee();

    commonStrategyData.performanceFee = !performanceFee.reverted ? performanceFee.value : ZERO;
    commonStrategyData.strategyFee = !strategyFee.reverted ? strategyFee.value : ZERO;
    commonStrategyData.withdrawFee = !withdrawFee.reverted ? withdrawFee.value : ZERO;
  }

  if (addr == "0x16626fd20b8e1541fdb85d9e63def368b374fa75")
  {
    let contract = StrategySushiDiggWbtcLpOptimizer.bind(Address.fromString(addr));

    let performanceFee = contract.try_performanceFeeGovernance();
    let strategyFee = contract.try_performanceFeeStrategist();
    let withdrawFee = contract.try_withdrawalFee();

    commonStrategyData.performanceFee = !performanceFee.reverted ? performanceFee.value : ZERO;
    commonStrategyData.strategyFee = !strategyFee.reverted ? strategyFee.value : ZERO;
    commonStrategyData.withdrawFee = !withdrawFee.reverted ? withdrawFee.value : ZERO;
  }
  return commonStrategyData;
}
// Mappings from HarvestToContracts - End

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

  strategyid: string; // address of the Strategy
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

    sgStrategy.performanceFee = ZERO;  
    sgStrategy.strategyFee = ZERO;  
    sgStrategy.withdrawFee = ZERO;  
  }
  let commonStrategyData = HarvestAddressToType(strategyid);
  sgStrategy.withdrawFee = commonStrategyData.withdrawFee;  
  sgStrategy.save();
  return sgStrategy as SgStrategy;
}

function handleCommonHarvestEvent(commonHarvestData: CommonHarvestData): void
{
  let sgStrategy = getOrCreateStrategy(commonHarvestData.strategyid);
  
  // Harvest Updates -------------
  let sgHarvest = SgHarvest.load(commonHarvestData.harvestid)
  if (sgHarvest == null)
  {
    sgHarvest = new SgHarvest(commonHarvestData.harvestid);

    sgHarvest.network = getCurrentNetwork();
    sgHarvest.sett = commonHarvestData.settAddress;

    sgHarvest.performanceFee = ZERO;
    sgHarvest.strategyFee = ZERO;
    sgHarvest.harvested = ZERO;
    sgHarvest.compounded = ZERO;   
  }

  sgHarvest.performanceFee = commonHarvestData.governancePerformanceFee;
  sgHarvest.strategyFee = commonHarvestData.strategistPerformanceFee;
  sgHarvest.harvested = commonHarvestData.totalFarmHarvested;
  sgHarvest.compounded = commonHarvestData.farmToRewards;
  // reverse lookup storage
  sgHarvest.sgStrategy = sgStrategy.id;
  sgHarvest.save();

  // Strategy updates ------------ 
  sgStrategy.performanceFee = sgStrategy.performanceFee.plus(commonHarvestData.governancePerformanceFee);
  sgStrategy.strategyFee = sgStrategy.strategyFee.plus(commonHarvestData.strategistPerformanceFee);

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

  commonHarvestData.strategyid = event.address.toHexString()

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

  commonHarvestData.strategyid = event.address.toHexString()

  handleCommonHarvestEvent(commonHarvestData);
}

