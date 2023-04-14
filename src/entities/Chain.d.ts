import { ImageData } from './Image'

export interface ChainData {
  id: string
  name: string
  logo: ImageData[]
  href: string
  createdAt: string
  updatedAt: string
}
