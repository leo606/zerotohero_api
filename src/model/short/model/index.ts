import { model } from 'mongoose'
import { shortingSchema } from './schema'
import { IShort } from './shorting.interface'

export const ShortingModel = model<IShort>(
  'shorting',
  shortingSchema,
  'shorting'
)
