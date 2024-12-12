import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | wXRP Swap',
  defaultTitle: 'Game | wXRP Swap',
  description: 'Play different games on wXRP, using wXRP',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@wXRP',
    site: '@wXRP',
  },
  openGraph: {
    title: 'wRipple - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 'Play different games on PancakeSwap, using CAKE and PancakeSwap NFTs',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
