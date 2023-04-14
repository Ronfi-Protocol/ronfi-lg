import { CSSObject, DefaultTheme, ThemedCssFunction, css } from 'styled-components/macro'

import colors from 'theme/colors'
import { Colors } from 'theme/types'

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    colors: Colors
    space: number[]
    breakpoints: any
    shadows: any
    borders: any
    buttons: any
    variants: any
    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }
  }
}

export const MEDIA_WIDTHS = {
  upToExtraSmall: 576,
  upToSmall: 768,
  upToMedium: 992,
  upToLarge: 1200,
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: CSSObject, b: CSSObject, c: CSSObject) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

export const breakpoints: any = Object.values(MEDIA_WIDTHS).map((e) => `${e}px`)
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

function theme(darkMode: boolean): DefaultTheme {
  return {
    colors: colors(darkMode),
    space: [0, 4, 8, 16, 32, 64, 128, 256],
    breakpoints,
    mediaWidth: mediaWidthTemplates,
    shadows: {
      1: '0px 8px 16px -8px rgba(15, 15, 15, 0.2)',
      2: '0px 24px 24px -16px rgba(15, 15, 15, 0.2)',
      3: '0px 32px 32px -24px rgba(15, 15, 15, 0.3)',
      4: '0px 48px 48px -32px rgba(15, 15, 15, 0.4)',
      5: '0px 16px 64px -48px rgba(15, 15, 15, 0.5)',
    },
    borders: {
      small: '1px solid',
      normal: '2px solid',
    },
    buttons: {
      primary: {
        color: 'neutral8',
        bg: 'primary1',
        borderColor: 'primary1',
        '&:hover,&:focus,&:active': {
          color: 'neutral8',
          bg: 'primary2',
          borderColor: 'primary2',
        },
        '&:before': {
          borderTop: `2px solid ${colors(darkMode).neutral8};`,
        },
      },
      success: {
        color: 'neutral8',
        bg: 'green1',
        borderColor: 'green1',
        '&:hover,&:focus,&:active': {
          color: 'neutral8',
          bg: 'primary2',
          borderColor: 'primary2',
        },
        '&:before': {
          borderTop: `2px solid ${colors(darkMode).neutral8};`,
        },
      },
      secondary: {
        color: 'white',
        bg: 'secondary1',
        borderColor: 'secondary1',
        '&:hover,&:focus,&:active': {
          color: 'white',
          bg: 'secondary2',
          borderColor: 'secondary2',
        },
      },
      outlineDanger: {
        color: 'neutral1',
        bg: 'transparent',
        borderColor: 'red1',
        '&:hover,&:focus,&:active': {
          bg: 'neutral6',
          borderColor: 'red1',
        },
      },
      outlinePrimary: {
        color: 'primary2',
        bg: 'transparent',
        borderColor: 'primary2',
        '&:hover,&:focus,&:active': {
          bg: 'neutral6',
          borderColor: 'neutral6',
        },
      },
      outlineSecondary: {
        color: 'secondary2',
        bg: 'transparent',
        borderColor: 'secondary2',
        '&:hover,&:focus,&:active': {
          bg: 'neutral6',
          borderColor: 'neutral6',
        },
      },
      ghost: {
        color: 'neutral1',
        bg: 'transparent',
        border: 'none',
        '&:hover,&:focus,&:active': {
          bg: 'transparent',
        },
      },
    },
    variants: {
      card: {
        p: 3,
        boxShadow: 3,
        borderRadius: 'md',
        border: '1px solid',
        borderColor: 'neutral6',
      },
    },
  }
}

export default theme
