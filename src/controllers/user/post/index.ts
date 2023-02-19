import { FastifyReply } from 'fastify'
import { createUser } from '../../../services/user/create'
import StatusCode from '../../../shared/statusCodesEnum'
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
  const { username, email, password } = req.body

  await createUser(username, email, password)

  return res
    .status(StatusCode.SuccessCreated)
    .send({ message: 'user created' })
}

const postUserRoute: postUserRouteOptions = {
  method: 'POST',
  url: '/user',
  schema: { body: joiSchema },
  validatorCompiler:
    ({ schema }: any) =>
      (data) =>
        schema.validate(data),
  handler,
}

export { postUserRoute }
