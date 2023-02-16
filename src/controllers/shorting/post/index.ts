import { FastifyRequest, FastifyReply, RouteOptions } from 'fastify'
import { createShortUrl } from '../../../services/shorting/create'
import { joiSchema } from './schema'

async function handler(req: FastifyRequest, res: FastifyReply) {
  await createShortUrl('anyy')
}

const postRoute: RouteOptions = {
  method: 'POST',
  url: '/',
  schema: {
    body: joiSchema,
  },
  validatorCompiler: ({ schema }: { schema: any }) => {
    return (data) => schema.validate(data)
  },
  handler,
}

export { postRoute }
