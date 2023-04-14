import { useResponsive } from 'ahooks'
import { ArrowUp2 } from 'iconsax-react'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

import Container from 'components/Layouts/Container'
import useLocationHash from 'hooks/helpers/useLocationHash'
import IconButton from 'theme/Button/IconButton'
import { Box, Flex, Image, Type } from 'theme/base'
import { MEDIA_WIDTHS } from 'theme/theme'

import MobileMenu from './MobileMenu'

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
  background: ${theme.colors.neutral8};`}
`

const NavItem = styled(Type.Caption1)<{ isActive: boolean }>`
  padding: 4px 16px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary1 : theme.colors.neutral1)};
  @media screen and (max-width: ${MEDIA_WIDTHS.upToMedium}px) {
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 32px;
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

const CollapseItems = ({ navHeader, activeIndex }: { navHeader?: NavHeader; activeIndex: number }) => (
  <Flex
    justifyContent={['center', 'center', 'center', 'end']}
    alignItems="center"
    flex="auto"
    flexDirection={['column', 'column', 'column', 'row']}
  >
    {navHeader ? (
      <>
        {navHeader.map((item, index) => (
          <NavLink key={item.headerID} to={`#${item.headerID}`}>
            <NavItem isActive={index === activeIndex} onClick={() => scrollToHash(item.headerID)}>
              {item.headerTitle}
            </NavItem>
          </NavLink>
        ))}
        <Box
          height={[1, 1, 1, 24]}
          width={[24, 24, 24, 1]}
          flex="0 0 1px"
          bg="neutral5"
          mx={[0, 0, 0, 12]}
          mb={[16, 16, 16, 0]}
        ></Box>
      </>
    ) : (
      <NavLink to="/">{({ isActive }) => <NavItem isActive={isActive}>Home</NavItem>}</NavLink>
    )}
    {/* <NavLink to="/customers">{({ isActive }) => <NavItem isActive={isActive}>Customers</NavItem>}</NavLink>
    <NavLink to="/quick-audit">{({ isActive }) => <NavItem isActive={isActive}>Quick Audit</NavItem>}</NavLink> */}
    <a href="https://decentralab.asia" target="_blank" rel="noreferrer">
      <NavItem isActive={false}>Company</NavItem>
    </a>
  </Flex>
)

const Navbar = ({ navHeader }: { navHeader?: NavHeader }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const indexRef = useRef(0)
  const { hash } = useLocationHash()
  const { lg } = useResponsive()
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
          <Flex alignItems="center" width="100%">
            <Link to="/">LOGO</Link>
            {lg && <CollapseItems navHeader={navHeader} activeIndex={activeIndex} />}
            {!lg && (
              <MobileMenu activeIndex={activeIndex}>
                <CollapseItems navHeader={navHeader} activeIndex={activeIndex} />
              </MobileMenu>
            )}
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
