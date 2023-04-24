import React from 'react'
import styled from 'styled-components/macro'

import Title from 'components/Title'
import { Box, Flex, Type } from 'theme/base'

const NORMAL_STATE_DATA = [
  'Lock your asset to the validator',
  'Re-stake by yourself',
  'Evaluate the validator’s performance by yourself',
  'Need to wait 3 + 3 days to stake and unstake',
  'Paid commission for validator',
]
const RONFI_STATE_DATA = [
  'Still use your access to other DeFi protocols',
  'Automated re-stake to receive compound interest',
  'We recommend the best validator for you',
  'Swap stRON to Ron as soon as you need it',
  'Paid an extra 5% rewards fee',
]

const Dot = styled(Box)`
  width: 8px;
  height: 8px;
  border-radius: 8px;
`

const Why = () => {
  return (
    <Box my={128}>
      <Title>Why RONFI?</Title>
      <Box sx={{ border: 'small', borderColor: 'neutral4' }}>
        <Box display={['block', 'block', 'flex']}>
          <Box pl={20} pb={12} flex="1">
            <Type.Large b py={34}>
              Normal Stake
            </Type.Large>
            {NORMAL_STATE_DATA.map((item, index) => (
              <Flex
                height={['auto', 'auto', '80px', '80px', 'auto']}
                key={index}
                alignItems="center"
                sx={{ gap: 8, borderTop: 'small', borderColor: 'neutral4' }}
                pr={20}
                py={20}
              >
                <Dot bg="neutral5"></Dot>
                <Type.Normal fontWeight="normal">{item}</Type.Normal>
              </Flex>
            ))}
          </Box>
          <Box flex="1">
            <Type.Large b py={32} pl={32}>
              Stake with{' '}
              <Box display="inline-block" bg="primary1" px="4px" py="2px" color="neutral1">
                RONFI
              </Box>
            </Type.Large>
            <Box bg="neutral3" pr={20} pb={12}>
              {RONFI_STATE_DATA.map((item, index) => (
                <Flex
                  height={['auto', 'auto', '80px', '80px', 'auto']}
                  key={index}
                  alignItems="center"
                  sx={{ gap: 8, borderTop: 'small', borderColor: 'neutral4' }}
                  pl={32}
                  py={20}
                >
                  <Dot bg={index === RONFI_STATE_DATA.length - 1 ? 'neutral5' : 'primary1'}></Dot>
                  <Type.Normal fontWeight="normal">{item}</Type.Normal>
                </Flex>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Why
