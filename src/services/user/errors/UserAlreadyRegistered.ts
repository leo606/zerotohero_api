import StatusCode from '../../../shared/statusCodesEnum'
import { HttpError } from '../../shared/errors/httpError'

export class UserAlreadyRegistered extends HttpError {
  constructor() {
    super('user already registered', StatusCode.ClientErrorConflict)
  }
}
