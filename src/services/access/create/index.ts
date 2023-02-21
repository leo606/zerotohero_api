import bcrypt from 'bcryptjs'
import { UsersModel } from '../../../repository/user/model'
import { InvalidPassword } from '../../shared/errors/access/InvalidPassword'
import { UserNotFound } from '../../shared/errors/users/UserNotFound'
import { genAccessToken } from '../helpers/genAccessToken'

export async function createLogin(username:string, password: string) {
  const userDocument = await UsersModel.findOne({ username })

  if (!userDocument) {
    throw new UserNotFound()
  }

  const passwordMatch = await bcrypt.compare(password, userDocument.password)

  if (!passwordMatch) {
    throw new InvalidPassword()
  }

  const token = genAccessToken({ username, email: userDocument.email })

  return ({ token })
}