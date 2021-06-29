import { handleShareTransfer } from './yVault';
import { Transfer } from '../../generated/nativeBadgerSett/V1Contract';
import { settLogic } from './sett';


export function wrappedHandleShareTransfer(event: Transfer): void {

    // This is the main function of yVault, handle all the processing here
    settLogic(event.address, event.params.from, event.params.to, event.params.value);
}