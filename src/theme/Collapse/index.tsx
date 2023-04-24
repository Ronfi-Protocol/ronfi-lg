import styled from 'styled-components/macro'

import { Box, Type } from 'theme/base'

const Collapse = styled(Type.Normal)<{ isOpen: boolean }>`
  width: 100%;
  padding-top: 12px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`

export const CollapseButton = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`
export default Collapse
