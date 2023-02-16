import { FastifyRequest, FastifyReply, RouteOptions } from 'fastify'

async function handler(_req: FastifyRequest, res: FastifyReply) {
  return res.status(501).send()
}

const getRoute: RouteOptions = {
  method: 'GET',
  url: '/',
  handler
}

export { getRoute }
