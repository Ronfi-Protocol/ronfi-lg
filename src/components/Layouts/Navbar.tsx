import { ArrowUp2 } from 'iconsax-react'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Container from 'components/Layouts/Container'
import useLocationHash from 'hooks/helpers/useLocationHash'
import IconButton from 'theme/Button/IconButton'
import { Box, Flex, Image, Type } from 'theme/base'

type NavHeader = {
  headerTitle: string
  headerRef: RefObject<HTMLDivElement>
  headerID: string
}[]

const NavbarWrapper = styled(Box)<{ scrolled?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10001;
  width: 100%;
  ${({ scrolled, theme }) =>
    !!scrolled &&
    `
  background: ${theme.colors.neutral1};`}
`

const NavItem = styled(Type.Normal)`
  position: relative;
  padding: 12px 26px;
  background: ${({ theme }) => theme.colors.neutral2};
  &:after {
    content: '';
    position: absolute;
    top: calc(50% - 12px);
    right: 0;
    width: 2px;
    height: 24px;
    background: ${({ theme }) => theme.colors.primary1};
  }
`

const nearestIndex = (
  currentPosition: number,
  sectionPositionArray: any[],
  startIndex: number,
  endIndex: number
): number => {
  if (startIndex === endIndex) return startIndex
  if (currentPosition + window.innerHeight === document.documentElement.scrollHeight)
    return sectionPositionArray.length - 1
  if (startIndex === endIndex - 1) {
    const startIndexEl = sectionPositionArray[startIndex].headerRef.current
    const endIndexEl = sectionPositionArray[endIndex].headerRef.current
    if (Math.abs(startIndexEl.offsetTop - currentPosition) < Math.abs(endIndexEl.offsetTop - currentPosition))
      return startIndex
    return endIndex
  }
  const nextNearest = ~~((startIndex + endIndex) / 2)
  const nextNearestEl = sectionPositionArray[nextNearest].headerRef.current
  const nextNearest1El = sectionPositionArray[nextNearest + 1].headerRef.current
  const a = Math.abs(nextNearestEl.offsetTop - currentPosition)
  const b = Math.abs(nextNearest1El.offsetTop - currentPosition)
  if (a < b) {
    return nearestIndex(currentPosition, sectionPositionArray, startIndex, nextNearest)
  }
  return nearestIndex(currentPosition, sectionPositionArray, nextNearest, endIndex)
}

const scrollToHash = (hash: string) => {
  const el = document.getElementById(hash)
  el?.scrollIntoView()
}

const Navbar = ({ navHeader }: { navHeader?: NavHeader }) => {
  const [scrolled, setScrolled] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0)
  const indexRef = useRef(0)
  const { hash } = useLocationHash()
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 48 - 12) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      if (navHeader) {
        const index = nearestIndex(window.scrollY, navHeader, 0, navHeader.length - 1)
        if (indexRef.current !== index) {
          setActiveIndex(index)
          indexRef.current = index
        }
      }
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [navHeader])
  useEffect(() => {
    if (hash) {
      scrollToHash(hash)
    }
  }, [hash])
  return (
    <>
      <NavbarWrapper py={scrolled ? 12 : [16, 16, 32]} scrolled={scrolled}>
        <Container>
          <Flex alignItems="center" width="100%" justifyContent="space-between">
            <Link to="/">
              <Image src="/images/ronfi-logo.png" sx={{ height: [32, 50] }} />
            </Link>
            <Box>
              <NavItem mr={16}>Document</NavItem>
              {/* <NavItem>Help</NavItem> */}
            </Box>
          </Flex>
        </Container>
      </NavbarWrapper>
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 100,
          transition: 'all 240ms ease',
          transform: scrolled ? 'translateY(0)' : 'translateY(120px)',
        }}
      >
        <IconButton
          icon={<ArrowUp2 variant="Bold" />}
          px="12px"
          py="8px"
          onClick={() => window.scrollTo({ behavior: 'smooth', top: 0 })}
        ></IconButton>
      </Box>
    </>
  )
}

export default Navbar
