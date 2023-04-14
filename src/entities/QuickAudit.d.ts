import { ImageData } from './Image'

export interface QuickAuditData {
  id: string
  name: string
  description: string
  website: string
  address: string
  presaleLink: string
  auditResult: string
  logo: ImageData[]
  isPublic: boolean
  auditTime: string
  createdAt: string
  updatedAt: string
}
