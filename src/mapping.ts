export { wrappedHandleShareTransfer } from './mappings/sgWrappers';
export { handleAffiliateShareTransfer } from './mappings/yVault';
export { handleHarvest } from './mappings/strategy';
export { handleBadgerTransfer } from './mappings/badger';
export { handleDiggTransfer } from './mappings/digg';
// Add back old hooks for functions removed in yYearn
export { handleStaked , handleUnstaked , handleFarmHarvest , handleSushiHarvest } from './mappings/oldFunctions'

