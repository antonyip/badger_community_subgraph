import {
    BadgerGeyser,
    Staked,
    Unstaked,
  } from '../../generated/nativeBadgerGeyser/BadgerGeyser';

import { SgTransfer, SgGeyser } from '../../generated/schema';
import { getEthNetwork } from '../utils/helpers/network';
import { Address} from '@graphprotocol/graph-ts';
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
    sgGeyser.save();
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
  sgTransfer.sgGeyser = sgGeyser.id;
  sgTransfer.save();

  // update geyser
  sgGeyser.transactions.push(stakeId);
  sgGeyser.netDeposit = sgGeyser.netDeposit.plus(event.params.amount);
  sgGeyser.grossDeposit = sgGeyser.grossDeposit.plus(event.params.amount);
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
  sgTransfer.sgGeyser = sgGeyser.id;
  sgTransfer.save();

  // update geyser
  sgGeyser.transactions.push(unstakeId);
  sgGeyser.netDeposit = sgGeyser.netDeposit.minus(event.params.amount);
  sgGeyser.grossWithdraw = sgGeyser.grossWithdraw.plus(event.params.amount);
  sgGeyser.save();
}