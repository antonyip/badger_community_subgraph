-- https://duneanalytics.com/queries/63663
--CREATE OR REPLACE VIEW dune_user_generated.badgerdao_income_statement_daily AS (
WITH days AS (
  SELECT date_trunc('day', time) as day 
  FROM ethereum.blocks
  WHERE date_trunc('hour', time) >= '2020-12-01 00:00' 
  GROUP BY 1
),
renCrv_wd AS (
SELECT date_trunc('day', evt_block_time) AS day,
    sum(value) / 1e18 AS renCrv_wd_renbtcCrv_daily
FROM erc20."ERC20_evt_Transfer" t
WHERE 
    contract_address = '\x49849c98ae39fff122806c06791fa73784fb3675' AND
    t.from = '\x444B860128B7Bf8C0e864bDc3b7a36a940db7D88' AND
    t.to = '\x8dE82C4C968663a0284b01069DDE6EF231D0Ef9B'
GROUP BY 1
),
sbtcCrv_wd AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sbtcCrv_wd_sbtcCrv_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x075b1bb99792c9E1041bA13afEf80C91a1e70fB3' AND
        t.from = '\x3Efc97A8e23f463e71Bf28Eb19690d097797eb17' AND
        t.to = '\x8dE82C4C968663a0284b01069DDE6EF231D0Ef9B'
    GROUP BY 1
),
tbtcCrv_wd AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS tbtcCrv_wd_tbtcCrv_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x64eda51d3ad40d56b9dfc5554e06f94e1dd786fd' AND
        t.from = '\xE2fA197eAA5C726426003074147a08beaA59403B' AND
        t.to = '\x8dE82C4C968663a0284b01069DDE6EF231D0Ef9B'
    GROUP BY 1
),
sushiWbtcEth_pf AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sushiWbtcEth_pf_xSUSHI_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x8798249c2e607446efb7ad49ec89dd1865ff4272' AND
        t.from = '\x7A56d65254705B4Def63c68488C0182968C452ce' AND
        t.to = '\xda25ee226e534d868f0dd8a459536b03fee9079b'
    GROUP BY 1
),
sushiWbtcEth_wd AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sushiWbtcEth_wd_slpWbtcEth_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\xceff51756c56ceffca006cd410b03ffc46dd3a58' AND
        t.from = '\x7A56d65254705B4Def63c68488C0182968C452ce' AND
        t.to = '\x8dE82C4C968663a0284b01069DDE6EF231D0Ef9B'
    GROUP BY 1
),
sushiBadgerWbtc_pf AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sushiBadgerWbtc_pf_xSUSHI_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x8798249c2e607446efb7ad49ec89dd1865ff4272' AND
        t.from = '\x3a494D79AA78118795daad8AeFF5825C6c8dF7F1' AND
        t.to = '\xda25ee226e534d868f0dd8a459536b03fee9079b'
    GROUP BY 1
),
sushiDiggWbtc_pf AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sushiDiggWbtc_pf_xSUSHI_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x8798249c2e607446efb7ad49ec89dd1865ff4272' AND
        t.from = '\xaa8dddfe7DFA3C3269f1910d89E4413dD006D08a' AND
        t.to = '\xda25ee226e534d868f0dd8a459536b03fee9079b'
    GROUP BY 1
),
harvestRenCrv_pf AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS harvestRenCrv_pf_FARM_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\xa0246c9032bc3a600820415ae600c6388619a14d' AND
        t.from = '\xaaE82E3c89e15E6F26F60724f115d5012363e030' AND
        t.to = '\xda25ee226e534d868f0dd8a459536b03fee9079b'
    GROUP BY 1
),
harvestRenCrv_wd AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS harvestRenCrv_wd_renbtcCrv_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x49849c98ae39fff122806c06791fa73784fb3675' AND
        t.from = '\xaaE82E3c89e15E6F26F60724f115d5012363e030' AND
        t.to = '\x8de82c4c968663a0284b01069dde6ef231d0ef9b'
    GROUP BY 1
),
yearnWbtc_wd AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e8 AS yearnWbtc_wd_WBTC_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x2260fac5e5542a773aa44fbcfedf7c193bc2c599' AND
        t.from = '\x4b92d19c11435614cd49af1b589001b7c08cd4d5' AND
        t.to = '\xB65cef03b9B89f99517643226d76e286ee999e77'
    GROUP BY 1
),
sushiWbtcIbbtc_pf AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sushiWbtcIbbtc_pf_xSUSHI_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x8798249c2e607446efb7ad49ec89dd1865ff4272' AND
        t.from = '\xf4146A176b09C664978e03d28d07Db4431525dAd' AND
        t.to = '\xda25ee226e534d868f0dd8a459536b03fee9079b'
    GROUP BY 1
),
sushiWbtcIbbtc_wd AS (
    SELECT date_trunc('day', evt_block_time) AS day,
        sum(value) / 1e18 AS sushiWbtcIbbtc_wd_slpIbbtcWbtc_daily
    FROM erc20."ERC20_evt_Transfer" t
    WHERE
        contract_address = '\x18d98D452072Ac2EB7b74ce3DB723374360539f1' AND
        t.from = '\xf4146A176b09C664978e03d28d07Db4431525dAd' AND
        t.to = '\xB65cef03b9B89f99517643226d76e286ee999e77'
    GROUP BY 1
),
btcBridge_mint AS (
    SELECT date_trunc('day', t2.evt_block_time) AS day,
        sum(t2.value) / 1e8 AS btcBridge_mint_renbtc_daily
    FROM erc20."ERC20_evt_Transfer" t
    JOIN erc20."ERC20_evt_Transfer" t2 USING (evt_tx_hash)
    WHERE
        (t.from = '\x0000000000000000000000000000000000000000' AND
        t.to = '\xb6ea1d3fb9100a2Cf166FEBe11f24367b5FCD24A')
        AND
        (t2.from = '\xb6ea1d3fb9100a2Cf166FEBe11f24367b5FCD24A' AND
        t2.to = '\xB65cef03b9B89f99517643226d76e286ee999e77')
        AND
        t.contract_address = '\xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
    GROUP BY 1
),
btcBridge_burn AS (
    SELECT date_trunc('day', t2.evt_block_time) AS day,
        sum(t2.value) / 1e8 AS btcBridge_burn_renbtc_daily
    FROM erc20."ERC20_evt_Transfer" t
    JOIN erc20."ERC20_evt_Transfer" t2 USING (evt_tx_hash)
    WHERE
        (t.from = '\xb6ea1d3fb9100a2Cf166FEBe11f24367b5FCD24A' AND
        t.to = '\x0000000000000000000000000000000000000000')
        AND
        (t2.from = '\xb6ea1d3fb9100a2Cf166FEBe11f24367b5FCD24A' AND
        t2.to = '\xB65cef03b9B89f99517643226d76e286ee999e77')
        AND
        t.contract_address = '\xeb4c2781e4eba804ce9a9803c67d0893436bb27d'
    GROUP BY 1
),
ibbtc_mb AS (
    SELECT date_trunc('day', t2.evt_block_time) AS day,
        sum(t2.value) / 1e18 AS ibbtc_mb_ibbtc_daily
    FROM erc20."ERC20_evt_Transfer" t
    JOIN erc20."ERC20_evt_Transfer" t2 USING (evt_tx_hash)
    WHERE
        (t.from = '\x0000000000000000000000000000000000000000' AND
        t.to = '\x3b823864cd0cbad8a1f2b65d4807906775becaa7')
        AND
        (t2.from = '\x3b823864cd0cbad8a1f2b65d4807906775becaa7' AND
        t2.to = '\xB65cef03b9B89f99517643226d76e286ee999e77')
        AND
        t.contract_address = '\xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f'
    GROUP BY 1
)

SELECT *
FROM days
LEFT JOIN renCrv_wd USING (day)
LEFT JOIN sbtcCrv_wd USING (day)
LEFT JOIN tbtcCrv_wd USING (day)
LEFT JOIN sushiWbtcEth_pf USING (day)
LEFT JOIN sushiWbtcEth_wd USING (day)
LEFT JOIN sushiBadgerWbtc_pf USING (day)
LEFT JOIN sushiDiggWbtc_pf USING (day)
LEFT JOIN harvestRenCrv_pf USING (day)
LEFT JOIN harvestRenCrv_wd USING (day)
LEFT JOIN yearnWbtc_wd USING (day)
LEFT JOIN sushiWbtcIbbtc_pf USING (day)
LEFT JOIN sushiWbtcIbbtc_wd USING (day)
LEFT JOIN btcBridge_mint USING (day)
LEFT JOIN btcBridge_burn USING (day)
LEFT JOIN ibbtc_mb USING (day)
ORDER BY 1 DESC
--)