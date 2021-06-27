import { Address } from '@graphprotocol/graph-ts';

import { Transfer, UFragments } from '../../generated/Digg/UFragments';
import { SgTransfer } from '../../generated/schema'
import { getEthNetwork } from '../utils/helpers/SG_network_helpers'
import { getOrCreateTokenBalance } from '../utils/helpers/token/balance';
export function handleDiggTransfer(event: Transfer): void {
  // Record the Transfer
  let sg_Transfer = new SgTransfer(event.transaction.hash.toHexString());
  sg_Transfer.network = getEthNetwork();
  sg_Transfer.from = event.transaction.from.toHexString();
  sg_Transfer.to = event.transaction.to.toHexString();
  sg_Transfer.amount = event.transaction.value;
  sg_Transfer.save();
  
  // Update account values
  let diggToken = Address.fromString('0x798d1be841a82a273720ce31c822c61a67a601c3');
  let digg = UFragments.bind(diggToken);
  let fromId = event.params.from
    .toHexString()
    .concat('-')
    .concat(diggToken.toHexString());
  let toId = event.params.to.toHexString().concat('-').concat(diggToken.toHexString());
  let fromAccount = getOrCreateTokenBalance(fromId, diggToken);
  let toAccount = getOrCreateTokenBalance(toId, diggToken);
  let shares = digg.fragmentsToShares(event.params.value);
  fromAccount.balance = fromAccount.balance.minus(shares);
  toAccount.balance = toAccount.balance.plus(shares);

  fromAccount.save();
  toAccount.save();
}
