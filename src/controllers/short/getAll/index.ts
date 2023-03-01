import { FastifyReply } from 'fastify'
import { listShorts } from '../../../services/short/list'
import StatusCode from '../../../shared/statusCodesEnum'
import { getAllShortsRequest, getAllShortsRouteOptions } from './schema'

async function handler(req: getAllShortsRequest, res: FastifyReply) {
  console.log(req.protocol)
  const shorts = await listShorts(req.protocol, req.hostname)

  return res.status(StatusCode.SuccessOK).send({ data: shorts })
}

const getAllShortsRoute: getAllShortsRouteOptions = {
  method: 'GET',
  url: '/short-urls',
  handler,
}

export { getAllShortsRoute }
