import { Address, Value, BigDecimal, BigInt } from '@graphprotocol/graph-ts';

import { Transfer } from '../../generated/Badger/MiniMeToken';
import { SgTransfer } from '../../generated/schema'
import { getCurrentNetwork } from '../utils/helpers/network'
import { getOrCreateUser } from '../utils/sett-util';

export function handleBadgerTransfer(event: Transfer): void {
  // Record the Transfer
  let sgTransfer = new SgTransfer(event.transaction.hash.toHexString());
  sgTransfer.network = getCurrentNetwork();
  sgTransfer.from = event.transaction.from.toHexString();
  sgTransfer.to = event.transaction.to.toHexString();
  sgTransfer.sett = "0x3472a5a71965499acd81997a54bba8d852c6e53d"
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


