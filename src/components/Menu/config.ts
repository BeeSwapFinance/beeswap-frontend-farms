import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //   label: 'Trade',
  //   icon: 'TradeIcon',
  //   items: [
  //     {
  //       label: 'Exchange',
  //       href: 'https://exchange.beeswaps.com/',
  //     },
  //     {
  //       label: 'Liquidity',
  //       href: 'https://exchange.beeswaps.com/#/pool',
  //     },
  //   ],
  // },
  // {
  //   label: 'Farms',
  //   icon: 'FarmIcon',
  //   href: '/farms',
  // },
  // {
  //   label: 'Hives',
  //   icon: 'PoolIcon',
  //   href: '/hives',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'IFO',
  //   icon: 'AuditIcon',
  //   href: '/ifo',
  // },
  // {
  //   label: 'Audit',
  //   icon: 'AuditIcon',
  //   href: '/audit',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0x1baB59784786b7D5B89934BFFB1e2942E265bD6D',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/beeswap-finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/beeswap-finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0xEA853Cc21B8777C07b240F74c1A2A9b27E7cdFbb',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/BeeSwapFinance/',
      },
      {
        label: 'Docs',
        href: 'https://beeswapfinance.gitbook.io/beeswap-finance/',
      },
      {
        label: 'Blog',
        href: 'https://beeswapfinance.medium.com/',
      },
    ],
  },
]

export default config
