import { Address, Value, BigDecimal, BigInt } from '@graphprotocol/graph-ts';

import { Transfer } from '../../generated/Badger/MiniMeToken';
import { SgTransfer } from '../../generated/schema'
import { getEthNetwork } from '../utils/helpers/SG_network_helpers'
import { getOrCreateTokenBalance } from '../utils/helpers/token/balance';

export function handleBadgerTransfer(event: Transfer): void {
  // Record the Transfer
  let sg_Transfer = new SgTransfer(event.transaction.hash.toHexString());
  sg_Transfer.network = getEthNetwork();
  sg_Transfer.from = event.transaction.from.toHexString();
  sg_Transfer.to = event.transaction.to.toHexString();
  sg_Transfer.amount = event.transaction.value;
  sg_Transfer.save();

  // Update account values
  let badgerToken = Address.fromString('0x3472a5a71965499acd81997a54bba8d852c6e53d');
  let fromAccount = getOrCreateTokenBalance(sg_Transfer.from, badgerToken);
  let toAccount = getOrCreateTokenBalance(sg_Transfer.to, badgerToken);

  fromAccount.balance = fromAccount.balance.minus(event.params._amount);
  toAccount.balance = toAccount.balance.plus(event.params._amount);

  fromAccount.save();
  toAccount.save();
}
