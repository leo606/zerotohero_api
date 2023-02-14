import {FastifyRequest, FastifyReply} from 'fastify'

function shortGet(_req: FastifyRequest, res: FastifyReply) {
  return res.status(501).send()
}

export { shortGet }
