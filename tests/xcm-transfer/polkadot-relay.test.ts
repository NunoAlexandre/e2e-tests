import { query, tx } from '../../helpers/api'

import { acala } from '../../networks/acala'
import { astar } from '../../networks/astar'
import {polkadot} from '../../networks/polkadot'
import {centrifuge} from '../../networks/centrifuge'

import buildTest from './shared'

const tests = [
  // // acala <-> polkadot
  // {
  //   from: 'acala',
  //   to: 'polkadot',
  //   name: 'DOT',
  //   test: {
  //     xtokensUp: {
  //       tx: tx.xtokens.transfer(acala.dot, 1e12, tx.xtokens.relaychainV2),
  //       balance: query.tokens(acala.dot),
  //     },
  //   },
  // },
  // {
  //   from: 'polkadot',
  //   to: 'acala',
  //   name: 'DOT',
  //   test: {
  //     xcmPalletDown: {
  //       tx: tx.xcmPallet.limitedReserveTransferAssetsV2(polkadot.dot, 1e12, tx.xcmPallet.parachainV2(0, acala.paraId)),
  //       balance: query.tokens(acala.dot),
  //     },
  //   },
  // },
  // // acala <-> polkadot9420
  // {
  //   from: 'acala',
  //   to: 'polkadot9420',
  //   name: 'DOT',
  //   test: {
  //     xtokensUp: {
  //       tx: tx.xtokens.transfer(acala.dot, 1e12, tx.xtokens.relaychainV2),
  //       balance: query.tokens(acala.dot),
  //     },
  //   },
  // },
  // {
  //   from: 'polkadot9420',
  //   to: 'acala',
  //   name: 'DOT',
  //   test: {
  //     xcmPalletDown: {
  //       tx: tx.xcmPallet.limitedReserveTransferAssetsV3(polkadot.dot, 1e12, tx.xcmPallet.parachainV3(0, acala.paraId)),
  //       balance: query.tokens(acala.dot),
  //     },
  //   },
  // },
  // // acala2180 <-> polkadot9420
  // {
  //   from: 'acala2180',
  //   to: 'polkadot9420',
  //   name: 'DOT',
  //   test: {
  //     xtokensUp: {
  //       tx: tx.xtokens.transfer(acala.dot, 1e12, tx.xtokens.relaychainV3),
  //       balance: query.tokens(acala.dot),
  //     },
  //   },
  // },
  // {
  //   from: 'polkadot9420',
  //   to: 'acala2180',
  //   name: 'DOT',
  //   test: {
  //     xcmPalletDown: {
  //       tx: tx.xcmPallet.limitedReserveTransferAssetsV3(polkadot.dot, 1e12, tx.xcmPallet.parachainV3(0, acala.paraId)),
  //       balance: query.tokens(acala.dot),
  //     },
  //   },
  // },
  // // polkadot <-> astar
  // {
  //   from: 'polkadot',
  //   to: 'astar',
  //   name: 'DOT',
  //   test: {
  //     xcmPalletDown: {
  //       tx: tx.xcmPallet.limitedReserveTransferAssetsV2(polkadot.dot, 1e12, tx.xcmPallet.parachainV2(0, astar.paraId)),
  //       balance: query.assets(astar.dot),
  //     },
  //   },
  // },
  // polkadot <-> centrifuge
  {
    from: 'centrifuge',
    to: 'polkadot',
    name: 'DOT',
    test: {
      xtokensUp: {
        tx: tx.xtokens.transfer(centrifuge.dot, 1e12, tx.xtokens.relaychainV2),
        balance: query.ormlTokens(centrifuge.dot),
      },
    },
  },
  {
    from: 'polkadot',
    to: 'centrifuge',
    name: 'DOT',
    test: {
      xcmPalletDown: {
        tx: tx.xcmPallet.limitedReserveTransferAssetsV2(polkadot.dot, 1e12, tx.xcmPallet.parachainV2(0, centrifuge.paraId)),
        balance: query.ormlTokens(centrifuge.dot),
      },
    },
  },
] as const

export type TestType = (typeof tests)[number]

buildTest(tests)
