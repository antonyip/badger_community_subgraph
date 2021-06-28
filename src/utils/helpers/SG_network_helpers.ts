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