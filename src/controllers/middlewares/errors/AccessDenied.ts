import { HttpError } from '../../../services/shared/errors/httpError'
import StatusCode from '../../../shared/statusCodesEnum'

export class AccessDenied extends HttpError {
  constructor() {
    super('access denied', StatusCode.ClientErrorUnauthorized)
  }
}