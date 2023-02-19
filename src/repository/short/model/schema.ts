import { Schema } from 'mongoose'
import { IShort } from './shorting.interface'
import { genUniqueShort } from '../../../services/short/utils/genUniqueShort'

export const shortingSchema = new Schema<IShort>(
  {
    baseUrl: {
      type: String,
      unique: true,
      required: true,
    },
    short: {
      type: String,
      required: true,
      unique: true,
      default: genUniqueShort
    },
    isActive: {
      type: Boolean,
      default: true
    },
    lastUsedAt: {
      type: Date,
      default: Date.now
    },
    usageCounter: {
      type: Number,
      default: 0
    }
  },
  {
    autoCreate: true,
    timestamps: true
  }
)


/**
 * TODO: setar indexes
 * {
 *  short
 * },
 * 
 * 
 * {
 *  short,
 *  isActive,
 *  lastUsedAt
 * }
 */