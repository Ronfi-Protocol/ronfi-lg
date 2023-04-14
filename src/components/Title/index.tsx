import { ArrowRight2 } from 'iconsax-react'
import React, { ReactNode } from 'react'

import { Flex, Type } from 'theme/base'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Flex alignItems="center" color="primary1" mb={32}>
      <ArrowRight2 variant="Bold" size={40} />
      <Type.H1 color="neutral1" ml={16}>
        {children}
      </Type.H1>
    </Flex>
  )
}

export default Title
