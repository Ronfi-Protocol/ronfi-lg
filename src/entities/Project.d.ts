import { ImageData } from './Image'

export interface ProjectData {
  id: string
  name: string
  description: string
  website: string
  auditResult: string
  logo: ImageData[]
  services: ('kyc' | 'kyb' | 'audit')[]
  chains: string[]
  isPublic: boolean
  auditTime: string
  createdAt: string
  updatedAt: string
}
