import React from 'react'

import { Box, Type } from 'theme/base'

import Container from './Container'

const Footer = () => {
  return (
    <Container>
      <Box display={['block', 'block', 'flex']} bg="neutral8" justifyContent="space-between" py={32}>
        <Type.Caption2>2022 © Ronfi. All rights reserved.</Type.Caption2>
        <Type.Caption2 display="block">DECENTRALAB PTE. LTD.160 Robinson Road, #14-04 Singapore</Type.Caption2>
      </Box>
    </Container>
  )
}

export default Footer
