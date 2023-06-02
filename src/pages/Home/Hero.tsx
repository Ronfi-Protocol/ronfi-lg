import { ArrowDown } from 'iconsax-react'
import React from 'react'
import styled from 'styled-components/macro'

import Container from 'components/Layouts/Container'
import SocialButtons from 'components/SocialButtons'
import { Box, Flex, Type } from 'theme/base'
import { MEDIA_WIDTHS } from 'theme/theme'

const HeroContent = styled(Box)`
  background: url(/images/ronfi-hero.webp) no-repeat;
  background-size: auto 100%;
  background-position: top right;
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    background-position: top right -50%;
  }
  @media screen and (max-width: ${MEDIA_WIDTHS.upToSmall}px) {
    background-size: 100% auto;
    background-position: top center;
  }
`

const Hero = () => {
  return (
    <Container>
      <HeroContent display={['block', 'block', 'flex']} pt={[200, 200, 0]}>
        <Box width="60%" pt={168}>
          <Type.Hero>
            Liquidity for staked{' '}
            <Box display="inline-block" p="6px" bg="primary1" color="neutral1">
              RON
            </Box>{' '}
            tokens
          </Type.Hero>
          <Type.Large b mt={40} mb={24} color="primary1">
            Estimated Testnet on May 2023
          </Type.Large>
        </Box>
      </HeroContent>
      <Box mx={['auto', 'auto', 'auto', 0]} width="fit-content" mt={[24, 24, 24, 0]}>
        <Flex alignItems="center" sx={{ gap: 12 }} mb={32} justifyContent={['center', 'center', 'center', 'start']}>
          <Box width={8} height={8} bg="primary1"></Box>
          <Type.Large>Join our community</Type.Large>
          <Box color="primary1" lineHeight={0}>
            <ArrowDown />
          </Box>
        </Flex>
        <SocialButtons />
      </Box>
    </Container>
  )
}

export default Hero
