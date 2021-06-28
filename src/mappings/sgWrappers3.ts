import { GEYSERS, NORMALIZER, NO_ADDR } from '../utils/constants';
import { handleSettDeposit, handleSettWithdraw, getOrCreateSett, getOrCreateSettBalance, getOrCreateUser } from "../utils/sett-util";
import {  BigInt, Address} from '@graphprotocol/graph-ts';

function isValidUser(address: string): boolean {
  return address != NO_ADDR && !GEYSERS.includes(address);
}

export function settLogic(
  addressSett: Address,
  fromUser: Address,
  toUser: Address,
  share: BigInt,
  ): void {
  // get relevant entities
  //let sett = getOrCreateSett(event.address);
  let sett = getOrCreateSett(addressSett);
  //let from = getOrCreateUser(event.params.from);
  let from = getOrCreateUser(fromUser);  
  //let to = getOrCreateUser(event.params.to);
  let to = getOrCreateUser(fromUser);
  

  // get share and token values
  //let share = event.params.value;
  let token = share.times(sett.pricePerFullShare).div(NORMALIZER);

  // get user balances
  let fromBalance = getOrCreateSettBalance(from, sett);
  let toBalance = getOrCreateSettBalance(to, sett);

  // deposit
  if (fromUser.toHexString() == NO_ADDR) {
    handleSettDeposit(toBalance, share, token);
    sett.netDeposit = sett.netDeposit.plus(token);
    sett.grossDeposit = sett.grossDeposit.plus(token);
    sett.netShareDeposit = sett.netShareDeposit.plus(share);
    sett.grossShareDeposit = sett.grossShareDeposit.plus(share);
  }

  // withdrawal
  if (toUser.toHexString() == NO_ADDR) {
    handleSettWithdraw(fromBalance, share, token);
    sett.netDeposit = sett.netDeposit.minus(token);
    sett.grossWithdraw = sett.grossWithdraw.plus(token);
    sett.netShareDeposit = sett.netShareDeposit.minus(share);
    sett.grossShareWithdraw = sett.grossShareWithdraw.plus(share);
  }

  // transfer
  if (isValidUser(fromUser.toHexString()) && isValidUser(toUser.toHexString())) {
    handleSettWithdraw(fromBalance, share, token);
    handleSettDeposit(toBalance, share, token);
  }

  to.save();
  from.save();
  sett.save();
}