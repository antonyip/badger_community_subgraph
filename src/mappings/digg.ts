import { Address } from '@graphprotocol/graph-ts';

import { Transfer, UFragments } from '../../generated/Digg/UFragments';
import { SgTransfer } from '../../generated/schema'
import { getEthNetwork, sgGetOrCreateUser } from '../utils/helpers/SG_network_helpers'

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
    let sgAccountFrom = sgGetOrCreateUser(sgTransfer.from);
    sgAccountFrom.transfers.push(sgTransfer.id);
    sgAccountFrom.save();
  
    let sgAccountTo = sgGetOrCreateUser(sgTransfer.to);
    sgAccountTo.transfers.push(sgTransfer.id);
    sgAccountTo.save();
}
