import bcrypt from 'bcryptjs'
import { UsersModel } from '../../../model/user/model'
import { AccessLevel } from '../../../shared/accessLevelsEnum'
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
    accessLevel: AccessLevel.User
  }).save()

  return userDocument
}
