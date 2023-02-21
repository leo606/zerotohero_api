import StatusCode from '../../../../shared/statusCodesEnum'
import { HttpError } from '../httpError'

export class UserNotFound extends HttpError {
  constructor() {
    super('user not found', StatusCode.ClientErrorNotFound)
  }
}