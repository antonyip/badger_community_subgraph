import { Transfer } from '../../generated/renCrv_wd_renbtcCrv_daily/Vyper_Contract'
import { BadgerDAODailyIncomeEvent } from  '../../generated/schema'



export function handleFeeTransfer(event: Transfer)
{
    if (event.transaction.from.toHexString() == "0x444B860128B7Bf8C0e864bDc3b7a36a940db7D88"
    && event.transaction.to.toHexString() == "0x8dE82C4C968663a0284b01069DDE6EF231D0Ef9B")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599";
        badgerDAODailyIncomeEvent.amount = event.params._value;

    }
}