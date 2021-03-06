import { BigDecimal, BigInt } from '@graphprotocol/graph-ts';

import { toDecimal } from './decimals';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const GOVERNANCE_ADDRESS = '0xba37b002abafdd8e89a1995da52740bbc013d992';
export let BIGINT_ZERO = BigInt.fromI32(0);
export let BIGINT_ONE = BigInt.fromI32(1);
export let BIGDECIMAL_ZERO = new BigDecimal(BIGINT_ZERO);
export let BIGDECIMAL_ONE = toDecimal(BigInt.fromI32(10).pow(18));
export let BIGDECIMAL_HUNDRED = toDecimal(BigInt.fromI32(10).pow(20));

// true constants
export const NONE = "";
export const NO_ADDR = "0x0000000000000000000000000000000000000000";
export const BADGER = "0x3472a5a71965499acd81997a54bba8d852c6e53d";
export const DIGG = "0x798d1be841a82a273720ce31c822c61a67a601c3";

// evaluated constants
export let ZERO = BigInt.fromI32(0);

// 10^18, suggest a better name!
export let NORMALIZER = BigInt.fromI32(10).pow(18);

// geysers
export let GEYSERS:string[] = [
  "0x10fc82867013fce1bd624fafc719bb92df3172fc",
  "0x2296f174374508278dc12b806a7f27c87d53ca15",
  "0xa207d69ea6fb967e54baa8639c408c31767ba62d",
  "0x085a9340ff7692ab6703f17ab5ffc917b580a6fd",
  "0xed0b7f5d9f6286d00763b0ffcba886d8f9d56d5e",
  "0xa9429271a28f8543efffa136994c0839e7d7bf77",
  "0x612f681bcd12a0b284518d42d2dbcc73b146eb65",
  "0xb5b654efba23596ed49fade44f7e67e23d6712e7",
  "0x0194b5fe9ab7e0c43a08acbb771516fc057402e7",
  "0x7f6fe274e172ac7d096a7b214c78584d99ca988b",
  "0x155482D1e2cB0909333326504f0eA4350760c927"
];