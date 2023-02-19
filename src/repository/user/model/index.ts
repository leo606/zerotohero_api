import { model } from 'mongoose'
import { userSchema } from './schema'
import { IUser } from './user.interface'

export const UsersModel = model<IUser>(
  'users',
  userSchema,
  'users'
)
