import { SgUser, SgHarvest, SgNetwork, SgSettBalance } from '../../../generated/schema';
import { BIGINT_ZERO } from '../constants';

export function getEthNetwork(): string {
    let net = SgNetwork.load('1')
    if (net == null)
    {
      net = new SgNetwork('1');
      net.name = 'eth';
      net.save();
    }
    return net.id;
}

export function getBscNetwork(): string {
  let net = SgNetwork.load('2')
  if (net == null)
  {
    net = new SgNetwork('2');
    net.name = 'bsc';
    net.save();
  }
  return net.id;
}

export function sgGetOrCreateUser(add: string): SgUser  {
  let sgUser = SgUser.load(add);
  if (sgUser == null)
  {
    sgUser = new SgUser(add);
    sgUser.network = getEthNetwork();
    sgUser.save();
  }
  return sgUser as SgUser;
}

export function sgGetOrCreateSettBalance(add: string): SgSettBalance  {
  let sgSettBalance = SgSettBalance.load(add);
  if (sgSettBalance == null)
  {
    sgSettBalance = new SgSettBalance(add);
    sgSettBalance.network = getEthNetwork();
    sgSettBalance.user = sgGetOrCreateUser(add).id;
    sgSettBalance.save();
  }
  return sgSettBalance as SgSettBalance;
}

export function sgGetOrCreateHarvest(add: string): SgHarvest  {
  let sgHarvest = SgHarvest.load(add);
  if (sgHarvest == null)
  {
    sgHarvest = new SgHarvest(add);
    sgHarvest.network = getEthNetwork();
    sgHarvest.sett = "todo"
    sgHarvest.performanceFee = BIGINT_ZERO
    sgHarvest.strategistFee = BIGINT_ZERO
    sgHarvest.withdrawFee = BIGINT_ZERO
    sgHarvest.harvested = BIGINT_ZERO
    sgHarvest.compounded = BIGINT_ZERO
    sgHarvest.performance = BIGINT_ZERO
    sgHarvest.strategist = BIGINT_ZERO
    sgHarvest.pricePerFullShare = BIGINT_ZERO
    sgHarvest.totalSupply = BIGINT_ZERO
    sgHarvest.balance = BIGINT_ZERO
    sgHarvest.save();
  }
  return sgHarvest as SgHarvest;
}