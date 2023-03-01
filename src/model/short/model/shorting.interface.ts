import { Document } from 'mongoose'

export interface IShort {
  baseUrl: string
  short: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  lastUsedAt: Date
  usageCounter: number
}

export type ShortDocument = Document<IShort>
