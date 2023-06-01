import { Config } from './types'

export default {
  polkadot: {
    name: 'centrifuge' as const,
    endpoint: 'wss://fullnode.parachain.centrifuge.io',
  },
  kusama: {
    name: 'altair' as const,
    endpoint: 'wss://fullnode.altair.centrifuge.io',
  },
  config: ({ alice }) => ({
    storages: {
      System: {
        Account: [[[alice.address], { data: { free: 1000n * 10n ** 18n } }]],
      },
    },
  }),
} satisfies Config

export const centrifuge = {
  paraId: 2031,
  dot: 42259045809535163221576417993425387648n,
} as const

export const altair = {
  paraId: 2088,
  ksm: { ForeignAsset: 3 },
} as const
