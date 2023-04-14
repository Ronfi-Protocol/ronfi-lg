import { DialogContent, DialogOverlay } from '@reach/dialog'
import { CloseCircle } from 'iconsax-react'
import React, { useCallback } from 'react'
import styled, { DefaultTheme, css } from 'styled-components/macro'

import IconButton from 'theme/Button/IconButton'
import { Box, Flex, Type } from 'theme/base'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledDialogOverlay = styled(DialogOverlay)`
  &[data-reach-dialog-overlay] {
    z-index: 10001;
    background-color: transparent;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.modalBG};
    transition: all 200ms ease;
  }
`
// destructure to not pass custom props to Dialog DOM element
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledDialogContent = styled(({ ...rest }) => <DialogContent {...rest} />).attrs({
  'aria-label': 'dialog',
})`
  overflow-y: visible;
  &[data-reach-dialog-content] {
    margin: auto;
    position: relative;
    background-color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.neutral7};
    border: 1px solid ${({ theme }: { theme: DefaultTheme }) => theme.colors.neutral6};
    box-shadow: ${({ theme }: { theme: DefaultTheme }) => theme.shadows[4]};
    width: ${({ width }) => width ?? '50vw'};
    padding: 12px;
    display: flex;
    flex-direction: column;
    .close {
      position: absolute;
      top: 8px;
      right: 8px;
    }
    ${({ theme }) => theme.mediaWidth.upToMedium`
      width: 65vw;
      margin: 0;
    `}
    ${({ theme, mobile }) => theme.mediaWidth.upToSmall`
      width:  90vw;
      padding: 8px;
      ${
        !!mobile &&
        css`
          width: 100vw;
          border-radius: 20px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        `
      }
    `}
  }
`
const StyledDialogBody = styled.div`
  padding: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1 1 auto;
`

interface ModalProps {
  isOpen: boolean
  isOverflown?: boolean
  onDismiss?: () => void
  dismissable?: boolean
  width?: string
  maxWidth?: string
  minHeight?: number | false
  maxHeight?: number
  hasClose?: boolean
  initialFocusRef?: React.RefObject<any>
  footer?: React.ReactNode
  children?: React.ReactNode
  title?: React.ReactNode
}

export default function Modal({
  isOpen,
  isOverflown = true,
  onDismiss,
  width,
  maxWidth,
  minHeight = false,
  dismissable = true,
  maxHeight = 90,
  title,
  hasClose,
  initialFocusRef,
  footer,
  children,
}: ModalProps) {
  const onDismissRequest = useCallback(() => (dismissable && onDismiss ? onDismiss() : null), [dismissable, onDismiss])

  return (
    <>
      <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismissRequest} initialFocusRef={initialFocusRef}>
        <StyledDialogContent
          {...{
            style: {
              overflowY: isOverflown ? 'auto' : 'visible',
              minHeight: minHeight ? `${minHeight}` : 'auto',
              maxHeight: maxHeight ? `${maxHeight}` : 'auto',
              maxWidth: maxWidth ? `${maxWidth}` : '420px',
            },
          }}
          aria-label="dialog content"
          width={width}
        >
          {Boolean(title) && (
            <Flex justifyContent="center" alignItems="center">
              <Box height={1} width={60} bg="primary2" display={['none', 'block']}></Box>
              <Type.H5 mx={24}>{title}</Type.H5>
              <Box height={1} width={60} bg="primary2" display={['none', 'block']}></Box>
            </Flex>
          )}
          {hasClose && (
            <IconButton
              className="close"
              variant="ghost"
              onClick={() => onDismiss && onDismiss()}
              sx={{ color: 'neutral4' }}
              icon={<CloseCircle size={24} />}
              width={24}
              height={24}
            />
          )}
          <StyledDialogBody>{children}</StyledDialogBody>
          {!!footer && (
            <Flex sx={{ flex: '1 1 auto', pt: 2 }} justifyContent={'flex-end'} px={2}>
              {footer}
            </Flex>
          )}
        </StyledDialogContent>
      </StyledDialogOverlay>
    </>
  )
}
