import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { HttpError } from '../../services/shared/errors/httpError'
import StatusCode from '../../shared/statusCodesEnum'

export function errorHandler(
  error: FastifyError,
  req: FastifyRequest,
  res: FastifyReply
) {
  req.log.error(error)

  if (error instanceof HttpError) {
    return res.status(error.code).send({ message: error.message })
  }

  return res
    .status(StatusCode.ServerErrorInternal)
    .send({ message: 'internal server error' })
}
