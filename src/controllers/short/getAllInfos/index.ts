import { FastifyReply } from 'fastify'
import { listShortsInfos } from '../../../services/short/list'
import { AccessLevel } from '../../../shared/accessLevelsEnum'
import StatusCode from '../../../shared/statusCodesEnum'
import { access } from '../../middlewares/access'
import { getAllShortsInfosRequest, getAllShortsInfosRouteOptions } from './schema'

async function handler(_req: getAllShortsInfosRequest, res: FastifyReply) {
  const shorts = await listShortsInfos()

  return res.status(StatusCode.SuccessOK).send({ data: shorts })
}

const getAllShortsInfoRoute: getAllShortsInfosRouteOptions = {
  method: 'GET',
  url: '/short-urls/info',
  handler,
  preHandler: access(AccessLevel.Admin)
}

export { getAllShortsInfoRoute }
