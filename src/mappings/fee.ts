import { Transfer } from '../../generated/renCrv_wd_renbtcCrv_daily/Vyper_Contract'
import { BadgerDAODailyIncomeEvent } from  '../../generated/schema'

export function handleDailyIncomeTransfer (event: Transfer) : void
{
    //https://etherscan.io/tx/0x9c1c5ddbda2ae217bd4ad3ca307fb709660a4c519193a3864328254124440011
    //renCrv_wd_renbtcCrv_daily
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

    //sbtcCrv_wd_sbtcCrv_daily
    if (event.params._from.toHexString() == "0x3efc97a8e23f463e71bf28eb19690d097797eb17"
    && event.params._to.toHexString() == "0x8de82c4c968663a0284b01069dde6ef231d0ef9b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x075b1bb99792c9e1041ba13afef80c91a1e70fb3";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //tbtcCrv_wd_tbtcCrv_daily
    if (event.params._from.toHexString() == "0xe2fa197eaa5c726426003074147a08beaa59403b"
    && event.params._to.toHexString() == "0x8de82c4c968663a0284b01069dde6ef231d0ef9b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x64eda51d3ad40d56b9dfc5554e06f94e1dd786fd";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    // sushiWbtcEth_pf_xSUSHI_daily
    if (event.params._from.toHexString() == "0x7a56d65254705b4def63c68488c0182968c452ce"
    && event.params._to.toHexString() == "0xda25ee226e534d868f0dd8a459536b03fee9079b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x8798249c2e607446efb7ad49ec89dd1865ff4272";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //sushiWbtcEth_wd_slpWbtcEth_daily
    if (event.params._from.toHexString() == "0x7a56d65254705b4def63c68488c0182968c452ce"
    && event.params._to.toHexString() == "0x8de82c4c968663a0284b01069dde6ef231d0ef9b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xceff51756c56ceffca006cd410b03ffc46dd3a58";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //sushiBadgerWbtc_pf_xSUSHI_daily
    if (event.params._from.toHexString() == "0x3a494d79aa78118795daad8aeff5825c6c8df7f1"
    && event.params._to.toHexString() == "0xda25ee226e534d868f0dd8a459536b03fee9079b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x8798249c2e607446efb7ad49ec89dd1865ff4272";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //sushiDiggWbtc_pf_xSUSHI_daily
    if (event.params._from.toHexString() == "0xaa8dddfe7dfa3c3269f1910d89e4413dd006d08a"
    && event.params._to.toHexString() == "0xda25ee226e534d868f0dd8a459536b03fee9079b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x8798249c2e607446efb7ad49ec89dd1865ff4272";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //harvestRenCrv_pf_FARM_daily
    if (event.params._from.toHexString() == "0xaae82e3c89e15e6f26f60724f115d5012363e030"
    && event.params._to.toHexString() == "0xda25ee226e534d868f0dd8a459536b03fee9079b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xa0246c9032bc3a600820415ae600c6388619a14d";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //harvestRenCrv_wd_renbtcCrv_daily
    if (event.params._from.toHexString() == "0xaae82e3c89e15e6f26f60724f115d5012363e030"
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

    //yearnWbtc_wd_WBTC_daily
    if (event.params._from.toHexString() == "0x4b92d19c11435614cd49af1b589001b7c08cd4d5"
    && event.params._to.toHexString() == "0xb65cef03b9b89f99517643226d76e286ee999e77")
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
        badgerDAODailyIncomeEvent.save();
    }

    //sushiWbtcIbbtc_pf_xSUSHI_daily
    if (event.params._from.toHexString() == "0xf4146a176b09c664978e03d28d07db4431525dad"
    && event.params._to.toHexString() == "0xda25ee226e534d868f0dd8a459536b03fee9079b")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x8798249c2e607446efb7ad49ec89dd1865ff4272";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //sushiWbtcIbbtc_wd_slpIbbtcWbtc_daily
    if (event.params._from.toHexString() == "0xf4146a176b09c664978e03d28d07db4431525dad"
    && event.params._to.toHexString() == "0xb65cef03b9b89f99517643226d76e286ee999e77")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0x18d98d452072ac2eb7b74ce3db723374360539f1";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //btcBridge_mint_renbtc_daily - 1
    if (event.params._from.toHexString() == "0x0000000000000000000000000000000000000000"
    && event.params._to.toHexString() == "0xb6ea1d3fb9100a2cf166febe11f24367b5fcd24a")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d-mint";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }
    //btcBridge_mint_renbtc_daily - 2
    if (event.params._from.toHexString() == "0xb6ea1d3fb9100a2cf166febe11f24367b5fcd24a"
    && event.params._to.toHexString() == "0xb65cef03b9b89f99517643226d76e286ee999e77")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d-mint";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    //btcBridge_burn_renbtc_daily - 1
    if (event.params._from.toHexString() == "0xb6ea1d3fb9100a2cf166febe11f24367b5fcd24a"
    && event.params._to.toHexString() == "0x0000000000000000000000000000000000000000")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d-burn";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }
    //btcBridge_burn_renbtc_daily - 2
    if (event.params._from.toHexString() == "0xb65cef03b9b89f99517643226d76e286ee999e77"
    && event.params._to.toHexString() == "0xb6ea1d3fb9100a2cf166febe11f24367b5fcd24a")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d-burn";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    if (event.params._from.toHexString() == "0x0000000000000000000000000000000000000000"
    && event.params._to.toHexString() == "0x3b823864cd0cbad8a1f2b65d4807906775becaa7")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }

    if (event.params._from.toHexString() == "0x3b823864cd0cbad8a1f2b65d4807906775becaa7"
    && event.params._to.toHexString() == "0xb65cef03b9b89f99517643226d76e286ee999e77")
    {
        let id = event.address.toHexString()
        .concat("-")
        .concat(event.transaction.hash.toHexString())
        .concat("-")
        .concat(event.transactionLogIndex.toHexString());
        let badgerDAODailyIncomeEvent = new BadgerDAODailyIncomeEvent(id);
        badgerDAODailyIncomeEvent.timestamp = event.block.timestamp;
        badgerDAODailyIncomeEvent.token = "0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f";
        badgerDAODailyIncomeEvent.amount = event.params._value;
        badgerDAODailyIncomeEvent.save();
    }
}