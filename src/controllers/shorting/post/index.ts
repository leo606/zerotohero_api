import { FastifyReply } from 'fastify'
import { createShortUrl } from '../../../services/shorting/create'
import { postUrlRouteOptions, joiSchema, postUrlRequest, postUrlResponse } from './schema'

async function handler(req: postUrlRequest, res: FastifyReply): Promise<postUrlResponse> {
  console.log('oi')
  const { url } = req.body
  await createShortUrl(url)
  return res.status(418).send({})
}

const postRoute: postUrlRouteOptions = {
  method: 'POST',
  url: '/oi',
  schema: { body: joiSchema },
  validatorCompiler: ({ schema }: { schema: any }) => (data) => schema.validate(data),
  handler,
}

export { postRoute }
