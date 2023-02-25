import { FastifyRequest } from 'fastify'
import { validate } from '../../services/access/validate/validate'
import { AccessLevel } from '../../shared/accessLevelsEnum'
import { AccessDenied } from './errors/AccessDenied'
import { AuthorizationHeaderNotFound } from './errors/AuthorizationHeaderNotFound'

export function access(level: AccessLevel) {
  return async (req: FastifyRequest) => {
    const { authorization: token } = req.headers

    if (!token) {
      throw new AuthorizationHeaderNotFound()
    }

    const authorized = await validate(token, level)

    if (!authorized) {
      throw new AccessDenied()
    }
  }
}
