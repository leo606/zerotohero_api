import { FastifyReply } from 'fastify'
import { getBaseUrl } from '../../../services/short/get'
import StatusCode from '../../utils/statusCodesEnum'
import { getShortRequest, getShortRouteOptions } from './schema'

async function handler(req: getShortRequest, res: FastifyReply) {
  try {
    const { short } = req.params
    const baseUrl = await getBaseUrl(short)

    return res.redirect(StatusCode.RedirectSeeOther, baseUrl)
  } catch (error) {
    console.log('deu ruim')
    console.log(error)
  }
}

const getShortRoute: getShortRouteOptions = {
  method: 'GET',
  url: '/short-url/:short',
  handler,
}

export { getShortRoute }
