import { Address, Value, BigDecimal, BigInt } from '@graphprotocol/graph-ts';

import { Transfer } from '../../generated/Badger/MiniMeToken';
import { SgTransfer } from '../../generated/schema'
import { getEthNetwork, sgGetOrCreateAccount } from '../utils/helpers/SG_network_helpers'

export function handleBadgerTransfer(event: Transfer): void {
  // Record the Transfer
  let sgTransfer = new SgTransfer(event.transaction.hash.toHexString());
  sgTransfer.network = getEthNetwork();
  sgTransfer.from = event.transaction.from.toHexString();
  sgTransfer.to = event.transaction.to.toHexString();
  sgTransfer.sett = "0x3472a5a71965499acd81997a54bba8d852c6e53d"
  sgTransfer.amount = event.transaction.value;
  sgTransfer.save();

  // Update User Transactions
  let sgAccountFrom = sgGetOrCreateAccount(sgTransfer.from);
  sgAccountFrom.transfers.push(sgTransfer.id);
  sgAccountFrom.save();

  let sgAccountTo = sgGetOrCreateAccount(sgTransfer.to);
  sgAccountTo.transfers.push(sgTransfer.id);
  sgAccountTo.save();
}


