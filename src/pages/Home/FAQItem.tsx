import { ArrowDown2, ArrowRight2 } from 'iconsax-react'
import React, { ReactNode, useCallback, useState } from 'react'

import Collapse, { CollapseButton } from 'theme/Collapse'
import { Box, Type } from 'theme/base'

const FAQItem = ({ title, content }: { title: string; content: ReactNode }) => {
  const [isOpen, setOpen] = useState(false)
  const toggle = useCallback(() => {
    setOpen((isOpen) => !isOpen)
  }, [])
  return (
    <Box sx={{ border: 'small', borderColor: 'primary1' }} p={16} mb={16}>
      <CollapseButton onClick={toggle}>
        <Box color="primary1" mr={12} lineHeight={0}>
          {isOpen ? <ArrowDown2 size={24} variant="Bold" /> : <ArrowRight2 size={24} variant="Bold" />}
        </Box>
        <Type.Body2 fontWeight="bold">{title}</Type.Body2>
      </CollapseButton>
      <Collapse isOpen={isOpen} textAlign="left" color="neutral2">
        {content}
      </Collapse>
    </Box>
  )
}

export default FAQItem
