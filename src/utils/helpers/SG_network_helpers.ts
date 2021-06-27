import { SgAccount, SgNetwork, SgSettBalance } from '../../../generated/schema';

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

export function sgGetOrCreateAccount(add: string): SgAccount  {
  let sgAccount = SgAccount.load(add);
  if (sgAccount == null)
  {
    sgAccount = new SgAccount(add);
    sgAccount.network = getEthNetwork();
    sgAccount.save();
  }
  return sgAccount as SgAccount;
}

export function sgGetOrCreateSettBalance(add: string): SgSettBalance  {
  let sgSettBalance = SgSettBalance.load(add);
  if (sgSettBalance == null)
  {
    sgSettBalance = new SgSettBalance(add);
    sgSettBalance.network = getEthNetwork();
    sgSettBalance.account = sgGetOrCreateAccount(add).id;
    sgSettBalance.save();
  }
  return sgSettBalance as SgSettBalance;
}
