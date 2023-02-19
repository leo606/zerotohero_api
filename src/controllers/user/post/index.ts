import { FastifyReply } from 'fastify'
import StatusCode from '../../utils/statusCodesEnum'
import {
  joiSchema,
  postUserRequest,
  postUserResponse,
  postUserRouteOptions,
} from './schema'

async function handler(
  req: postUserRequest,
  res: FastifyReply
): Promise<postUserResponse> {
  try {
    const { username, email, password } = req.body

    return res.status(StatusCode.ServerErrorNotImplemented).send({message: 'not implemented'})
  } catch (error) {
    req.log.error(error)
    return res
      .status(StatusCode.ServerErrorInternal)
      .send({ message: 'internal server error' })
  }
}

const postUserRoute: postUserRouteOptions = {
  method: 'POST',
  url: '/user',
  schema: { body: joiSchema },
  validatorCompiler: (schema: any) => (data) => schema.validate(data),
  handler,
}

export { postUserRoute }
