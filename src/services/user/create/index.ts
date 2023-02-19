import bcrypt from 'bcryptjs'
import { UsersModel } from '../../../repository/user/model'
import { UserAlreadyRegistered } from '../errors/UserAlreadyRegistered'

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const existsUserRegistered = await UsersModel.exists({
    $or: [{ username }, { email }],
  })

  if (existsUserRegistered) {
    throw new UserAlreadyRegistered()
  }

  const passwordHash = await bcrypt.hash(password, 15)

  const userDocument = await new UsersModel({
    username,
    email,
    password: passwordHash,
  }).save()

  return userDocument
}
