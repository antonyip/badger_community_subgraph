import { Transfer } from '../../generated/renCrv_wd_renbtcCrv_daily/Vyper_Contract'
import { BadgerDAODailyIncomeEvent } from  '../../generated/schema'

export function handleDailyIncomeTransfer (event: Transfer) : void
{
    //https://etherscan.io/tx/0x9c1c5ddbda2ae217bd4ad3ca307fb709660a4c519193a3864328254124440011
    if (event.params._from.toHexString() == "0x444b860128b7bf8c0e864bdc3b7a36a940db7d88"
    && event.params._to.toHexString() == "0x8de82c4c968663a0284b01069dde6ef231d0ef9b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x49849c98ae39fff122806c06791fa73784fb3675";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }
}