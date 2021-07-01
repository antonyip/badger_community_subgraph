-- https://duneanalytics.com/queries/63673
--CREATE OR REPLACE VIEW dune_user_generated.badgerdao_fx_table_daily AS (
SELECT day,
    wbtc_usd,
    xsushi_usd,
    farm_usd,
    slpwwbtceth_usd,
    wbtc_ibbtc * wbtc_usd AS slpibbtcwbtc_usd,
    renbtcCrv_usd,
    sbtcCrv_usd,
    tbtcCrv_usd,
    renbtc_usd,
    wbtc_ibbtc * wbtc_usd AS ibbtc_usd
FROM (
    SELECT date_trunc('day', minute) AS day, avg(price) AS wbtc_usd
    FROM prices.usd
    WHERE contract_address = '\x2260fac5e5542a773aa44fbcfedf7c193bc2c599'
    GROUP BY 1
) a
LEFT JOIN (
    SELECT date_trunc('day', hour) AS day, avg(median_price) AS xSUSHI_usd
    FROM dex.view_token_prices 
    WHERE contract_address = '\x8798249c2E607446EfB7Ad49eC89dD1865Ff4272'
    GROUP BY 1
) b USING (day)
LEFT JOIN (
    SELECT date_trunc('day', hour) AS day, avg(price) AS FARM_usd
    FROM dune_user_generated.badgerdao_farm_usd_feed_hourly
    GROUP BY 1
) c USING (day)
LEFT JOIN (
    SELECT
        day,
        (sum(wbtc) OVER (ORDER BY day) * wbtc_usd + sum(weth) OVER (ORDER BY day) * weth_usd) / sum(supply) OVER (ORDER BY day) AS SlpWWbtcEth_usd
    FROM (
        SELECT date_trunc('day', minute) AS day,
            sum(supply) AS supply,
            sum(wbtc) AS wbtc,
            sum(weth) AS weth,
            avg(wbtc_usd) AS wbtc_usd,
            avg(weth_usd) AS weth_usd
        FROM dune_user_generated.badgerdao_slpWbtcEth_composition
        GROUP BY 1
    ) rate
) d USING (day)
LEFT JOIN (
    SELECT date_trunc('day', evt_block_time) AS day,
        avg(("amount0In" + "amount0Out") / ("amount1In" + "amount1Out") * 1e10) AS wbtc_ibbtc -- note different decimals: 1e8 / 1e18 (or * 1e10)
    FROM sushi."Pair_evt_Swap"
    WHERE ("amount1In" + "amount1Out") > 0 AND ( -- cannot divide by 0
        contract_address = '\x18d98d452072ac2eb7b74ce3db723374360539f1' -- WBTC ibBTC
        )
    GROUP BY 1
) e USING (day)
LEFT JOIN (
    SELECT date_trunc('day', hour) AS day, avg(price) AS renbtcCrv_usd
    FROM dune_user_generated.badgerdao_renbtcCrv_usd_feed_hourly
    GROUP BY 1
) f USING (day)
LEFT JOIN (
    SELECT date_trunc('day', hour) AS day, avg(price) AS sbtcCrv_usd
    FROM dune_user_generated.badgerdao_sbtcCrv_usd_feed_hourly
    GROUP BY 1
) g USING (day)
LEFT JOIN (
    SELECT date_trunc('day', hour) AS day, avg(price) AS tbtcCrv_usd
    FROM dune_user_generated.badgerdao_tbtcCrv_usd_feed_hourly
    GROUP BY 1
) h USING (day)
LEFT JOIN (
    SELECT date_trunc('day', hour) AS day, avg(price) AS renbtc_usd
    FROM dune_user_generated.badgerdao_renbtc_usd_feed_hourly
    GROUP BY 1
) i USING (day)
ORDER BY 1 DESC
--)