import React, { ReactNode } from 'react'

import { Box, Type } from 'theme/base'

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ borderBottom: '1px solid', borderColor: 'neutral8' }} width="100%">
      <Type.H4 width="fit-content" px={16} py="4px" bg="neutral8" color="neutral1">
        {children}
      </Type.H4>
    </Box>
  )
}

export default Title
