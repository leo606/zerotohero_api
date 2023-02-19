import { FastifyReply } from 'fastify'
import { createShortUrl } from '../../../services/short/create'
import { getRedirectUrl } from '../../../services/short/utils/getRedirectUrl'
import StatusCode from '../../../shared/statusCodesEnum'
import {
  postShortRouteOptions,
  joiSchema,
  postShortRequest,
  postShortResponse,
} from './schema'

async function handler(
  req: postShortRequest,
  res: FastifyReply
): Promise<postShortResponse> {
  const { url } = req.body

  const short = await createShortUrl(url)
  const shortUrl = getRedirectUrl(req.protocol, req.hostname, short)
  console.log({ shortUrl })

  return res.status(StatusCode.SuccessCreated).send({ shortUrl })
}

const postShortRoute: postShortRouteOptions = {
  method: 'POST',
  url: '/short-url',
  schema: { body: joiSchema },
  validatorCompiler:
    ({ schema }: { schema: any }) =>
      (data) =>
        schema.validate(data),
  handler,
}

export { postShortRoute }
