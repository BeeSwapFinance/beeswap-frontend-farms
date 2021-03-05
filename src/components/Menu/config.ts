import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.beeswaps.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.beeswaps.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Hives',
    icon: 'PoolIcon',
    href: '/hives',
  },
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
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x3aEb6DeE52eD6772f26C68bAc63f121121d7092F',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/beeswap-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/beeswap-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0xa7790950dd0a314380fa84e5dc584023568c8095',
      },
    ],
  },
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
