import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import React, { ReactNode, useCallback, useState } from 'react'

import Collapse, { CollapseButton } from 'theme/Collapse'
import { Box, Type } from 'theme/base'

const FAQItem = ({ title, content }: { title: string; content: ReactNode }) => {
  const [isOpen, setOpen] = useState(false)
  const toggle = useCallback(() => {
    setOpen((isOpen) => !isOpen)
  }, [])
  return (
    <Box bg="neutral2" p={16} mb={16}>
      <CollapseButton onClick={toggle}>
        <Type.H5 fontWeight="bold">{title}</Type.H5>
        <Box color="primary1" mr={12} lineHeight={0}>
          {isOpen ? <ArrowDown2 size={24} variant="Bold" /> : <ArrowUp2 size={24} variant="Bold" />}
        </Box>
      </CollapseButton>
      <Collapse isOpen={isOpen} textAlign="left" color="neutral5">
        {content}
      </Collapse>
    </Box>
  )
}

export default FAQItem
