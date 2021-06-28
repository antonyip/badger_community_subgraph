import { Transfer } from '../../generated/oBTC/BadgerSett';
import { settLogic } from './sgWrappers3';

export function wrappedHandleShareTransfer2(event: Transfer): void {
  settLogic(event);
}