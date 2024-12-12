import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | WXRP Swap',
  defaultTitle: 'Game | WXRP Swap',
  description: 'WXRP Swap using wXRP',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@wRipple',
    site: '@wRipple',
  },
  openGraph: {
    title: 'wXRP - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description: 'WXRP Swap using wXRP',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/v2/hero.jpg' }],
  },
}
