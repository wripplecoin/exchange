import { useTranslation } from '@pancakeswap/localization'
import { Box, FlexGap, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import useTheme from 'hooks/useTheme'
import { useMemo } from 'react'
import { styled } from 'styled-components'
import { getImageUrl } from './utils'

const InfoSectionWrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.background};
  min-height: 657px;
  padding: 80px 24px;

  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 160px;
  }
`
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const InnerWrapper = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`
const walletConfig = [
  {
    title: 'Trust Wallet',
    image: 'img/4.png',
    doc: 'https://trustwallet.com/',
  },
  {
    title: 'OKX Wallet',
    image: 'img/2.png',
    doc: 'https://bybit.com',
  },
  {
    title: 'Bybit wallet',
    image: 'img/3.png',
    doc: ' https://www.coinbase.com/',
  },
  {
    title: 'Binance Wallet',
    image: 'img/1.png',
    doc: 'https://binance.com/',
  },
]

export const InfoSection: React.FC<{ walletCount: number }> = ({ walletCount }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { isMobile } = useMatchBreakpoints()
  const walletCountDisplay = useMemo(() => {
    if (walletCount < 126780) return '60,000+ Holder'
    return walletCount.toLocaleString()
  }, [walletCount])

  return (
    <InfoSectionWrapper>
      <Wrapper>
        <InnerWrapper>
          <Box>
            <Text textAlign="center" fontSize="64px" bold color="secondary" lineHeight="76px">
              {walletCountDisplay}
            </Text>
            <Text fontSize="40px" lineHeight="48px" textAlign="center" bold>
              {t('Total Holders addresses')}
            </Text>
          </Box>
          <Text textAlign="center">
            {t('Having trouble? Choose your wallet to view the detailed guide on how to safely HODL wXRP:')}
          </Text>
          <FlexGap
            maxWidth="588px"
            gap="40px"
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            alignItems="center"
            justifyContent="center"
          >
            {walletConfig.map((wallet) => (
              <FlexGap
                flexDirection="column"
                alignItems="center"
                gap="8px"
                onClick={() => {
                  window.open(wallet.doc, '_blank', 'noopener noreferrer')
                }}
                style={{ cursor: 'pointer' }}
              >
                <img src={getImageUrl(wallet.image)} alt={wallet.title} width="64px" />
                <Text fontSize="16px" lineHeight="24px" bold color="#02919D">
                  {t(wallet.title)}
                </Text>
              </FlexGap>
            ))}
          </FlexGap>
          {/* <FlexGap flexDirection="column" gap="24px" justifyContent="center" alignItems="center">
            <Text>{t('or')}</Text>
            <Button
              onClick={() => {
                window.open(
                  'https://docs.pancakeswap.finance/products/pancakeswap-private-rpc/faq',
                  '_blank',
                  'noopener noreferrer',
                )
              }}
              endIcon={<LinkExternal color={theme.colors.background} />}
            >
              {t('View FAQ docs')}
            </Button>
          </FlexGap> */}
        </InnerWrapper>
      </Wrapper>
    </InfoSectionWrapper>
  )
}
