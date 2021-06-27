import { handleShareTransfer } from './yVault';
import { Transfer } from '../../generated/nativeBadgerSett/V1Contract';

export function wrappedHandleShareTransfer(event: Transfer): void {

    // This is the main function of yVault, handle all the processing here
    
    // this function is the original yVault Function
    // so that people used to the old system can still use it.
    handleShareTransfer(event);
}