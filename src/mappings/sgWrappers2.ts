import { Transfer } from '../../generated/oBTC/BadgerSett';
import { settLogic } from './sgWrappers3';

export function wrappedHandleShareTransfer2(event: Transfer): void {
  settLogic(event.address, event.params.from, event.params.to, event.params.value);
}