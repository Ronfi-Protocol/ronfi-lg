import React from 'react'

import Container from 'components/Layouts/Container'
import Title from 'components/Title'
import { Box, Flex, Image } from 'theme/base'

import FAQItem from './FAQItem'

const FAQ = () => {
  return (
    <Container minHeight={['80vh', '80vh', 'auto']}>
      <Flex justifyContent="space-between" alignItems="center" pt={[60, 120]} pb={[32, 64]}>
        <Title>Question & Answer</Title>
      </Flex>
      <Box display={['block', 'block', 'flex']}>
        <Box flex="1 1 60%">
          <FAQItem
            title="What is Ronfi?"
            content={
              <div>
                <b>Ronfi</b> is a liquid staking solution to maximize profit, minimize risk, and increase liquidity for
                RON delegators
              </div>
            }
          />
          <FAQItem
            title="How does RonFI Works?"
            content={
              <ul>
                <li>Stake RON and receive stRON with ratio 1:1</li>
                <li>Use stRON on DeFi, Protocols,... while still receive reward from staking</li>
                <li>Un-stake anytime you want to receive RON back</li>
              </ul>
            }
          />
          <FAQItem
            title="Is it safe to work with RONFI?"
            content={
              <div>
                We built Ronfi with the utmost transparency:
                <br />
                <br />
                <ul>
                  <li>Open-sourcing & continuous review of all code.</li>
                  <li>Working hard and closer with validators.</li>
                  <li>Use of DAO for governance decisions & to manage risk factors.</li>
                </ul>
                <br />
                But there are still potential risks that you need to be aware of. Please see more on our Whitepaper
              </div>
            }
          />
          <FAQItem
            title="How does Ronfi impact to Ronin Chain?"
            content="With the liquid staking solution of Ronfi, Ronin Chain is still secure and stable under the DPos
            mechanism. Besides, when stRON is still used on the chain, it will increase the Total Value Locked
            (TVL), Users Active as well as the amount of transaction."
          />
        </Box>
        <Box flex="1 1 40%" display={['none', 'none', 'flex']} justifyContent="center" alignItems="center">
          <Image src="/images/ronfi-faq.png" height={300} />
        </Box>
      </Box>
    </Container>
  )
}

export default FAQ
