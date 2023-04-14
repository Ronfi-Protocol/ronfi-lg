import { ImageData } from 'entities/Image'

import { SUPPORTED_LOCALES } from './constants'

/**
 * Given a locale string (e.g. from user agent), return the best match for corresponding SupportedLocale
 * @param maybeSupportedLocale the fuzzy locale identifier
 */
export function parseLocale(maybeSupportedLocale: string) {
  if (typeof maybeSupportedLocale !== 'string') return undefined
  const lowerMaybeSupportedLocale = maybeSupportedLocale.toLowerCase()
  return SUPPORTED_LOCALES.find(
    (locale) => locale.toLowerCase() === lowerMaybeSupportedLocale || locale.split('-')[0] === lowerMaybeSupportedLocale
  )
}

export const parseImage = (imgs: ImageData[]) =>
  imgs.length > 0 ? `${process.env.REACT_APP_API}/storage${imgs[0].url}` : ''
