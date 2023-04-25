import React from 'react'
import styled from 'styled-components/macro'

import Title from 'components/Title'
import { Box, Flex, Type } from 'theme/base'

const NORMAL_STATE_DATA = [
  'Lock your asset to the validator',
  'Manual re-staking, day by day',
  "Evaluate the validator's performance by yourself",
  'Need to wait 3 days to withdraw your assets since your last delegation',
]
const RONFI_STATE_DATA = [
  'Still use your access to other DeFi protocols or dApps without losing any staking rewards',
  'Automated re-staking to receive compound interest',
  'Split to multiple validators to maximize rewards and reduce risk',
  'Swap stRON to RON immediately on DEX',
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
                height="80px"
                key={index}
                alignItems="center"
                sx={{ gap: 8, borderTop: 'small', borderColor: 'neutral4' }}
                pr={20}
                py={20}
              >
                <Dot bg="neutral5" flex="0 0 8px"></Dot>
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
                  height="80px"
                  key={index}
                  alignItems="center"
                  sx={{ gap: 8, borderTop: 'small', borderColor: 'neutral4' }}
                  pl={32}
                  py={20}
                >
                  <Dot bg={'primary1'} flex="0 0 8px"></Dot>
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
