import { Address } from '@graphprotocol/graph-ts';
import { SgToken, SgTokenBalance } from '../../../../generated/schema';
import { BIGINT_ZERO } from '../../constants';

export function getOrCreateToken(id: string): SgToken
{
  let token = SgToken.load(id);
  if (token == null)
  {
    token = new SgToken(id);
    token.address = id;
    token.decimals = 8;
    token.name = "id";
    token.symbol = "id";
    token.save();
  }
  return token as SgToken;
}

export function getOrCreateTokenBalance(id: String, address: Address): SgTokenBalance {
  let tokenBalance = SgTokenBalance.load(id.toString());
  if (tokenBalance == null) {
    tokenBalance = new SgTokenBalance(id.toString());
    tokenBalance.balance = BIGINT_ZERO;
    let token = getOrCreateToken(address.toHexString());
    tokenBalance.token = token.id;
  }
  return tokenBalance as SgTokenBalance;
}
