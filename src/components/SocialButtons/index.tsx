import React from 'react'

import { Box, Flex, Image, Type } from 'theme/base'
import { BoxProps } from 'theme/types'

export const SocialButton = ({ text, link, ...props }: { text: string; link: string } & BoxProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Box sx={{ borderBottom: 'small', borderColor: 'primary1' }} pb={8} {...props}>
        <Flex alignItems="center" width="fit-content">
          <Image src={`/images/ronin-${text.toLowerCase()}.svg`} height="40" />
          <Type.H5 ml={16}>{text}</Type.H5>
        </Flex>
      </Box>
    </a>
  )
}

const SocialButtons = () => (
  <Flex sx={{ gap: 48 }}>
    <SocialButton text="Telegram" link="https://t.me/ronfi_io" />
    <SocialButton text="Twitter" link="https://twitter.com/ronfi_io" />
  </Flex>
)

export default SocialButtons
