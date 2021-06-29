import { Transfer } from '../../generated/oBTC/BadgerSett';
import { settLogic } from './sett';

export function wrappedHandleShareTransfer2(event: Transfer): void {

  // This is the main function of setts, handle all the processing here
  settLogic(event.address, event.params.from, event.params.to, event.params.value);

  // this function is the original yVault Function
  // so that people used to the old system can still use it.
  // TODO: enable this back
  //handleShareTransfer(event);
}