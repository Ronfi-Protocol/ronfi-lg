import { Like1 } from 'iconsax-react'
import React from 'react'

import Title from 'components/Title'
import { Box, Flex, Image, Type } from 'theme/base'

const How = () => {
  return (
    <div>
      <Title>How RONFI work?</Title>
      <Box display={['block', 'block', 'flex']} mt={40} sx={{ gap: 24 }}>
        <Box flex="1" mt={40}>
          <Image src="/images/ronfi-step1.png" height={150} />
          <Flex alignItems="center" sx={{ gap: 24 }}>
            <Type.Large b>1. Stake RON</Type.Large>
            <Image src="/images/ronfi-arrow-step.svg" height={14} />
          </Flex>
          <Box color="neutral5" mt={24}>
            Stake any amount of your tokens to access daily staking rewards
          </Box>
        </Box>
        <Box flex="1" mt={40}>
          <Image src="/images/ronfi-step2.png" height={150} />
          <Flex alignItems="center" sx={{ gap: 24 }}>
            <Type.Large b>2.Receive stRON</Type.Large>
            <Image src="/images/ronfi-arrow-step.svg" height={12} />
          </Flex>
          <Box color="neutral5" mt={24}>
            Receive liquid stTokens and start to receive rewards in real-time
          </Box>
        </Box>
        <Box flex="1" mt={40}>
          <Image src="/images/ronfi-step3.png" height={150} />
          <Flex alignItems="center" sx={{ gap: 12 }}>
            <Type.Large b>3.Use stRON on DeFi</Type.Large>
            <Box lineHeight={0} color="primary1">
              <Like1 variant="Bold" />
            </Box>
          </Flex>
          <Box color="neutral5" mt={24}>
            Use your stTokens across DeFi to compound more to your daily staked rewards
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default How
