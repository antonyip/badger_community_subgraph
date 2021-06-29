import { Address, BigInt, log } from "@graphprotocol/graph-ts"
import { 
  SgUser,
  SgSett,
  SgSettBalance,
  Token,
 } from "../../generated/schema"
 import { BadgerSett } from "../../generated/oBTC/BadgerSett"
 import { ERC20 } from "../../generated/oBTC/ERC20"
 import { AffiliateVault } from "../generated/YFI-WBTC/AffiliateVault"
 import { NO_ADDR, ZERO } from "./constants"
import { getCurrentNetwork } from "./network"

export function handleSettWithdraw(userBalance: SgSettBalance, share: BigInt, token: BigInt): void {
  userBalance.netDeposit = userBalance.netDeposit.minus(token);
  userBalance.grossWithdraw = userBalance.grossWithdraw.plus(token);
  userBalance.netShareDeposit = userBalance.netShareDeposit.minus(share);
  userBalance.grossShareWithdraw = userBalance.grossShareWithdraw.plus(share);
  userBalance.save();
}

export function handleSettDeposit(userBalance: SgSettBalance, share: BigInt, token: BigInt): void {
  userBalance.netDeposit = userBalance.netDeposit.plus(token);
  userBalance.grossDeposit = userBalance.grossDeposit.plus(token);
  userBalance.netShareDeposit = userBalance.netShareDeposit.plus(share);
  userBalance.grossShareDeposit = userBalance.grossShareDeposit.plus(share);
  userBalance.save();
}

export function getOrCreateUser(address: Address): SgUser {
  let user = SgUser.load(address.toHexString());

  if (user == null) {
    user = new SgUser(address.toHexString());
    user.network = getCurrentNetwork();
  }

  return user as SgUser;
}

export function getOrCreateSett(address: Address): SgSett {
  let sett = SgSett.load(address.toHexString());
  

  if (sett == null) {
    sett = new SgSett(address.toHexString());
    sett.network = getCurrentNetwork();
    sett.name = "";
    sett.symbol = "";
    sett.token = "";
    sett.pricePerFullShare = ZERO;
    sett.balance = ZERO;
    sett.totalSupply = ZERO;
    sett.netDeposit = ZERO;
    sett.grossDeposit = ZERO;
    sett.grossWithdraw = ZERO;
    sett.netShareDeposit = ZERO;
    sett.grossShareDeposit = ZERO;
    sett.grossShareWithdraw = ZERO;
  }

  let contract = BadgerSett.bind(address);
  
  let name = contract.try_name();
  let symbol = contract.try_symbol();
  let token = contract.try_token();
  let pricePerFullShare = contract.try_getPricePerFullShare();
  let balance = contract.try_balance();
  let totalSupply = contract.try_totalSupply();
  sett.name = !name.reverted ? name.value : sett.name;
  sett.symbol = !symbol.reverted ? symbol.value : sett.symbol;
  sett.token = !token.reverted ? getOrCreateToken(token.value).id : sett.token;
  sett.pricePerFullShare = !pricePerFullShare.reverted ? pricePerFullShare.value : sett.pricePerFullShare;
  sett.balance = !balance.reverted ? balance.value : sett.balance;
  sett.totalSupply = !totalSupply.reverted ? totalSupply.value : sett.totalSupply;
  

  return sett as SgSett;
}

export function getOrCreateSettBalance(user: SgUser, sett: SgSett): SgSettBalance {
  let settBalanceId = user.id.concat("-").concat(sett.id);
  let settBalance = SgSettBalance.load(settBalanceId);

  if (settBalance == null) {
    settBalance = new SgSettBalance(settBalanceId);
    settBalance.sett = sett.id;
    settBalance.user = user.id;
    settBalance.netDeposit = ZERO;
    settBalance.network = getCurrentNetwork();
    settBalance.grossDeposit = ZERO;
    settBalance.grossWithdraw = ZERO;
    settBalance.netShareDeposit = ZERO;
    settBalance.grossShareDeposit = ZERO;
    settBalance.grossShareWithdraw = ZERO;
  }

  return settBalance as SgSettBalance;
}

export function getOrCreateToken(address: Address): Token {
  let token = Token.load(address.toHexString());

  if (token == null) {
    let tokenContract = ERC20.bind(address);
    let decimals = tokenContract.try_decimals();
    let name = tokenContract.try_name();
    let symbol = tokenContract.try_symbol();
    let totalSupply = tokenContract.try_totalSupply();

    token = new Token(address.toHexString());
    token.decimals = !decimals.reverted ? decimals.value : token.decimals;
    token.name = !name.reverted ? name.value : token.name;
    token.symbol = !symbol.reverted ? symbol.value : token.symbol;
    token.totalSupply = !totalSupply.reverted ? totalSupply.value : token.totalSupply;
    token.save();
  }

  return token as Token;
};


export function getOrCreateAffiliateSett(address: Address): SgSett {
  let sett = SgSett.load(address.toHexString());
  let contract = AffiliateVault.bind(address);

  if (sett == null) {
    sett = new SgSett(address.toHexString());
    sett.name = "";
    sett.symbol = "";
    sett.token = "";
    sett.pricePerFullShare = ZERO;
    sett.balance = ZERO;
    sett.totalSupply = ZERO;
    sett.netDeposit = ZERO;
    sett.grossDeposit = ZERO;
    sett.grossWithdraw = ZERO;
    sett.netShareDeposit = ZERO;
    sett.grossShareDeposit = ZERO;
    sett.grossShareWithdraw = ZERO;
  }

  let name = contract.try_name();
  let symbol = contract.try_symbol();
  let token = contract.try_token();
  let pricePerFullShare = contract.try_pricePerShare();
  let balance = contract.try_totalVaultBalance(address);
  let totalSupply = contract.try_totalSupply();
  sett.name = !name.reverted ? name.value : sett.name;
  sett.symbol = !symbol.reverted ? symbol.value : sett.symbol;
  sett.token = !token.reverted ? getOrCreateToken(token.value).id : sett.token;
  sett.pricePerFullShare = !pricePerFullShare.reverted ? pricePerFullShare.value : sett.pricePerFullShare;
  sett.balance = !balance.reverted ? balance.value : sett.balance;
  sett.totalSupply = !totalSupply.reverted ? totalSupply.value : sett.totalSupply;

  return sett as SgSett;
}
