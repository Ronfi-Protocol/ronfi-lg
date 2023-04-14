import React from 'react'

import Container from 'components/Layouts/Container'
import Title from 'components/Title'
import { Box, Flex, Image, Type } from 'theme/base'

import FAQItem from './FAQItem'

const FAQ = () => {
  return (
    <Container minHeight={['80vh', '80vh', 'auto']}>
      <Flex justifyContent="space-between" alignItems="center" pt={[60, 120]} pb={[32, 64]}>
        <Title>FAQ</Title>
      </Flex>
      <Box display={['block', 'block', 'flex']}>
        <Box flex="1 1 60%">
          <FAQItem title="Question" content={<Type.Span>Answer</Type.Span>} />
        </Box>
        <Box flex="1 1 40%" display={['none', 'none', 'block']}></Box>
      </Box>
    </Container>
  )
}

export default FAQ
