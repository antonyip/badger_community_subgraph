import { SgNetwork, } from '../../../generated/schema';

// TODO: work on the automatic network getter

export function getCurrentNetwork(): string {
    let net = SgNetwork.load('1')
    if (net == null)
    {
      net = new SgNetwork('1');
      net.name = 'eth';
      net.save();
    }
    return net.id;
}