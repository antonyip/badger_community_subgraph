import { Address } from '@graphprotocol/graph-ts';

import { Transfer, UFragments } from '../../generated/Digg/UFragments';
import { SgTransfer } from '../../generated/schema'
import { getEthNetwork } from '../utils/helpers/network'
import { getOrCreateUser } from '../utils/sett-util';

export function handleDiggTransfer(event: Transfer): void {
  // Record the Transfer
  let sgTransfer = new SgTransfer(event.transaction.hash.toHexString());
  sgTransfer.network = getEthNetwork();
  sgTransfer.from = event.transaction.from.toHexString();
  sgTransfer.to = event.transaction.to.toHexString();
  sgTransfer.sett = '0x798d1be841a82a273720ce31c822c61a67a601c3'
  sgTransfer.amount = event.transaction.value;
  sgTransfer.save();

  // Update User Transactions
  if (event.transaction.from != null)
  {
    let sgAccountFrom = getOrCreateUser(event.transaction.from as Address);
    sgAccountFrom.transfers.push(sgTransfer.id);
    sgAccountFrom.save();
  }

  if (event.transaction.to != null)
  {
    let sgAccountTo = getOrCreateUser(event.transaction.to as Address);
    sgAccountTo.transfers.push(sgTransfer.id);
    sgAccountTo.save();
  }
}
