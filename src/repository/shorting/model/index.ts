import { model } from 'mongoose'
import { shortingSchema } from './schema'
import { IShorting } from './shorting.interface'

export const ShortingModel = model<IShorting>(
  'shorting',
  shortingSchema,
  'shorting'
)
