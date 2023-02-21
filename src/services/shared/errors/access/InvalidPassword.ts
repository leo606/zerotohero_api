import StatusCode from '../../../../shared/statusCodesEnum'
import { HttpError } from '../httpError'

export class InvalidPassword extends HttpError {
  constructor() {
    super('invalid password', StatusCode.ClientErrorUnauthorized)
  }
}