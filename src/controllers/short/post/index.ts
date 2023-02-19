import { FastifyReply } from 'fastify'
import { createShortUrl } from '../../../services/short/create'
import { getRedirectUrl } from '../../../services/short/utils/getRedirectUrl'
import StatusCode from '../../utils/statusCodesEnum'
import { postShortRouteOptions, joiSchema, postShortRequest, postShortResponse } from './schema'

async function handler(req: postShortRequest, res: FastifyReply): Promise<postShortResponse> {
  try {
    const { url } = req.body

    const short = await createShortUrl(url)
    const shortUrl = getRedirectUrl(req.protocol, req.hostname, short)
    console.log({shortUrl})

    return res.status(StatusCode.SuccessCreated).send({ shortUrl })
  } catch (error) {
    req.log.error(error)
    return res.status(StatusCode.ServerErrorInternal).send({ message: 'intenal server error' })
  }
}

const postShortRoute: postShortRouteOptions = {
  method: 'POST',
  url: '/short-url',
  schema: { body: joiSchema },
  validatorCompiler: ({ schema }: { schema: any }) => (data) => schema.validate(data),
  handler,
}

export { postShortRoute }
