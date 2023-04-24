import React from 'react'

import SocialButtons from 'components/SocialButtons'
import { Box, Image, Type } from 'theme/base'

const Community = () => {
  return (
    <Box textAlign="center" mt={128}>
      <Image src="/images/ronfi-cta.png" height="136px" />
      <Box mt={24} fontSize="20px" color="neutral5" style={{ fontWeight: 'normal' }}>
        Stay up to date with RONFI development
      </Box>
      <Type.H4 my={32}>
        <Box display="inline-block" p="4px" bg="primary1" color="neutral1">
          Join
        </Box>{' '}
        our community
      </Type.H4>
      <Box mx="auto" width="fit-content">
        <SocialButtons />
      </Box>
    </Box>
  )
}

export default Community
