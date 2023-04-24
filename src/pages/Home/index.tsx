import React from 'react'

import Container from 'components/Layouts/Container'
import Navbar from 'components/Layouts/Navbar'

import Community from './Community'
import FAQ from './FAQ'
import Hero from './Hero'
import How from './How'
import Why from './Why'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <Why />
        <How />
      </Container>
      <FAQ />
      <Community />
    </div>
  )
}

export default Home
