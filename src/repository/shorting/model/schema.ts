import { Schema } from 'mongoose'
import { IShorting } from './shorting.interface'

export const shortingSchema = new Schema<IShorting>({
  baseUrl: { type: String, required: true },
  alias: { type: String, required: true }
})