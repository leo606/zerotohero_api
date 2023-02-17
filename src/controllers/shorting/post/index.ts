import { FastifyReply, RouteOptions } from 'fastify'
import { createShortUrl } from '../../../services/shorting/create'
import { postUrlRequest, joiSchema } from './schema'

async function handler(req: postUrlRequest, res: FastifyReply) {
  console.log(req.body)
  await createShortUrl('asd')
  return res.status(418).send()
}

const postRoute: RouteOptions = {
  method: 'POST',
  url: '/',
  schema: { body: joiSchema },
  validatorCompiler: ({ schema }: { schema: any }) => (data) => schema.validate(data),
  handler,
}

export { postRoute }
