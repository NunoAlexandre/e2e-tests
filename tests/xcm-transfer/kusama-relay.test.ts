import { query, tx } from '../../helpers/api'

import { karura } from '../../networks/acala'
import { kusama } from '../../networks/polkadot'
import { shiden } from '../../networks/astar'
import { altair } from '../../networks/centrifuge'

import buildTest from './shared'

const tests = [
  // karura <-> kusama
  {
    from: 'karura',
    to: 'kusama',
    name: 'KSM',
    test: {
      xtokensUp: {
        tx: tx.xtokens.transfer(karura.ksm, 1e12, tx.xtokens.relaychainV2),
        balance: query.tokens(karura.ksm),
      },
    },
  },
  {
    from: 'kusama',
    to: 'karura',
    name: 'KSM',
    test: {
      xcmPalletDown: {
        tx: tx.xcmPallet.limitedReserveTransferAssetsV3(kusama.ksm, 1e12, tx.xcmPallet.parachainV3(0, karura.paraId)),
        balance: query.tokens(karura.ksm),
      },
    },
  },
  // karura2180 <-> kusama
  {
    from: 'karura2180',
    to: 'kusama',
    name: 'KSM',
    test: {
      xtokensUp: {
        tx: tx.xtokens.transfer(karura.ksm, 1e12, tx.xtokens.relaychainV3),
        balance: query.tokens(karura.ksm),
      },
    },
  },
  {
    from: 'kusama',
    to: 'karura2180',
    name: 'KSM',
    test: {
      xcmPalletDown: {
        tx: tx.xcmPallet.limitedReserveTransferAssetsV3(kusama.ksm, 1e12, tx.xcmPallet.parachainV3(0, karura.paraId)),
        balance: query.tokens(karura.ksm),
      },
    },
  },
  // kusama <-> shiden
  {
    from: 'kusama',
    to: 'shiden',
    name: 'KSM',
    test: {
      xcmPalletDown: {
        tx: tx.xcmPallet.limitedReserveTransferAssetsV3(kusama.ksm, 1e12, tx.xcmPallet.parachainV3(0, shiden.paraId)),
        balance: query.assets(shiden.ksm),
      },
    },
  },
  // kusama <-> altair
  {
    from: 'kusama',
    to: 'altair',
    name: 'KSM',
    test: {
      xcmPalletDown: {
        tx: tx.xcmPallet.limitedReserveTransferAssetsV3(kusama.ksm, 1e12, tx.xcmPallet.parachainV3(0, altair.paraId)),
        balance: query.ormlTokens(altair.ksm),
      },
    },
  },
  {
    from: 'altair',
    to: 'kusama',
    name: 'KSM',
    test: {
      xtokensUp: {
        tx: tx.xtokens.transfer(altair.ksm, 1e12, tx.xtokens.relaychainV2),
        balance: query.ormlTokens(altair.ksm),
      },
    },
  },
] as const

export type TestType = (typeof tests)[number]

buildTest(tests)
