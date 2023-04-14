export { messages as DEFAULT_MESSAGES } from 'locales/en/messages'
export const SUPPORTED_LOCALES = ['en']
export const DEFAULT_LOCALE = 'en'
export const DEFAULT_CHAIN_ID = '56'
export const CHAIN_ID = +(process.env.REACT_APP_CHAIN_ID ?? DEFAULT_CHAIN_ID)

export const LINKS = {
  telegram: 'https://t.me/ronfi_channel',
  email: 'support@ronfi.org',
  twitter: 'https://twitter.com/ronfi_org',
  github: 'https://github.com/Ronfi',
  medium: '',
  whitepaper: '',
}

export const SUPPORTS = [
  {
    name: 'Mr.Drake',
    telegram: '@ronfi',
    link: 'https://t.me/ronfi',
  },
  // {
  //   name: 'Ms.Loren',
  //   telegram: '@ronfi_loren',
  //   link: 'https://t.me/ronfi_loren',
  // },
  {
    name: 'Mr.Viet',
    telegram: '@vietdn',
    link: 'https://t.me/vietdn',
  },
]
