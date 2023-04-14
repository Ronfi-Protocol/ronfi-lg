import React, { useRef } from 'react'
import styled from 'styled-components/macro'

import Navbar from 'components/Layouts/Navbar'

import FAQ from './FAQ'

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const whyRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const navHeader = [
    {
      headerTitle: 'Home',
      headerRef: homeRef,
      headerID: 'home',
    },
    {
      headerTitle: 'About',
      headerRef: aboutRef,
      headerID: 'about',
    },
    {
      headerTitle: 'Why Us',
      headerRef: whyRef,
      headerID: 'why',
    },
    {
      headerTitle: 'FAQ',
      headerRef: faqRef,
      headerID: 'faq',
    },
    {
      headerTitle: 'Contact',
      headerRef: contactRef,
      headerID: 'contact',
    },
  ]

  return (
    <div>
      <Navbar navHeader={navHeader} />
      <div ref={faqRef} id="faq">
        <FAQ />
      </div>
    </div>
  )
}

export default Home
