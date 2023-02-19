import { Schema } from 'mongoose'
import { IUser } from './user.interface'

export const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  {
    autoCreate: true,
    timestamps: true,
  },
)
