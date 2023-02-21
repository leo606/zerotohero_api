import { FastifyReply } from 'fastify'
import { createLogin } from '../../../services/access/create'
import StatusCode from '../../../shared/statusCodesEnum'
import {
  joiSchema,
  postLoginRequest,
  postLoginResponse,
  postLoginRouteOptions,
} from './schema'

async function handler(
  req: postLoginRequest,
  res: FastifyReply
): Promise<postLoginResponse> {
  const { username, password } = req.body

  const loginData = await createLogin(username, password)

  return res
    .status(StatusCode.SuccessCreated)
    .send({ message: 'ok', data: loginData })
}

const postLoginRouter: postLoginRouteOptions = {
  method: 'POST',
  url: '/login',
  schema: { body: joiSchema },
  validatorCompiler:
    ({ schema }: any) =>
      (data) =>
        schema.validate(data, { abortEarly: false }),
  handler,
}

export { postLoginRouter }
