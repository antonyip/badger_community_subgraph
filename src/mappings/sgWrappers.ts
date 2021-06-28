import { handleShareTransfer } from './yVault';
import { Transfer } from '../../generated/nativeBadgerSett/V1Contract';
import { sgGetOrCreateAccount, sgGetOrCreateHarvest } from '../utils/helpers/SG_network_helpers';
import { BIGINT_ZERO } from '../utils/constants';
import { settLogic } from './sgWrappers3';


export function wrappedHandleShareTransfer(event: Transfer): void {

    // This is the main function of yVault, handle all the processing here
    settLogic(event);
    
    // this function is the original yVault Function
    // so that people used to the old system can still use it.
    handleShareTransfer(event);
}