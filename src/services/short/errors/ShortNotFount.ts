import StatusCode from '../../../shared/statusCodesEnum'
import { HttpError } from '../../shared/errors/httpError'

export class ShortNotFount extends HttpError {
  constructor() {
    super('short url not found', StatusCode.ClientErrorNotFound)
  }
}