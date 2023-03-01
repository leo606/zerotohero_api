import jwt from 'jsonwebtoken'
import { UsersModel } from '../../../model/user/model'
import { AccessLevel } from '../../../shared/accessLevelsEnum'

declare module 'jsonwebtoken' {
  export interface UserJwtPayload extends JwtPayload {
    username: string
    email: string
  }
}

export async function validate(token: string, level: AccessLevel) {
  try {
    // TODO: organizar as variaveis de ambiente em um config
    const tokenData = <jwt.UserJwtPayload>jwt.verify(token, process.env.JWT_TOKEN_SECRET || '')

    const userDocument = await UsersModel.findOne({
      username: tokenData.username,
      email: tokenData.email,
      isActive: true,
    })

    if (!userDocument) {
      return false
    }

    if (userDocument.accessLevel <= level) {
      return {
        _id: userDocument._id,
        username: userDocument.username,
        email: userDocument.email,
      }
    }

    return false
  } catch (error) {
    return false
  }
}
