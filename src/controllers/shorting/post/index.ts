import {FastifyRequest, FastifyReply} from 'fastify'

function shortPost(_req: FastifyRequest, res: FastifyReply) {
  return res.status(501).send()
}

export { shortPost }
