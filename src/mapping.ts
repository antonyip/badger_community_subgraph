export { wrappedHandleShareTransfer } from './mappings/oldSettHooks';
export { wrappedHandleShareTransfer2 } from './mappings/newSettHooks';
export { handleAffiliateShareTransfer } from './mappings/yVault';
export { handleHarvest } from './mappings/strategy';
export { handleBadgerTransfer } from './mappings/badger';
export { handleDiggTransfer } from './mappings/digg';
// Add back old hooks for functions removed in yYearn
export { handleStaked , handleUnstaked } from './mappings/geyser'
export { handleFarmHarvest , handleSushiHarvest } from './mappings/harvest'

