import { FastifyReply } from 'fastify'
import { createUser } from '../../../services/user/create'
import { AccessLevel } from '../../../shared/accessLevelsEnum'
import StatusCode from '../../../shared/statusCodesEnum'
import { access } from '../../middlewares/access'
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
  console.log(123123123123)
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
        schema.validate(data, { abortEarly: false }),
  handler,
  preHandler: access(AccessLevel.Admin)
}

export { postUserRoute }
