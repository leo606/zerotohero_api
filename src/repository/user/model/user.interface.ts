import { Document } from 'mongoose'

export interface IUser {
  username: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  isActive: boolean
}

export type UserDocument = Document<IUser>
