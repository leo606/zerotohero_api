import { HttpError } from '../../../services/shared/errors/httpError'
import StatusCode from '../../../shared/statusCodesEnum'

export class AuthorizationHeaderNotFound extends HttpError {
  constructor() {
    super('authorization header not found', StatusCode.ClientErrorUnauthorized)
  }
}