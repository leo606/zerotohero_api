import { FastifyReply } from 'fastify'
import { getBaseUrl } from '../../../services/short/get'
import StatusCode from '../../../shared/statusCodesEnum'
import { getShortRequest, getShortRouteOptions } from './schema'

async function handler(req: getShortRequest, res: FastifyReply) {
  const { short } = req.params
  const baseUrl = await getBaseUrl(short)

  return res.redirect(StatusCode.RedirectSeeOther, baseUrl)
}

const getShortRoute: getShortRouteOptions = {
  method: 'GET',
  url: '/short-url/:short',
  handler,
}

export { getShortRoute }
