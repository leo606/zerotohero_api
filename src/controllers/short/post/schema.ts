import {
  FastifyRequest,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteOptions,
} from 'fastify'
import Joi from 'joi'

export interface postShortDTO {
  url: string;
}

export interface postShortResponse {
  message: string;
}

export type postShortRequest = FastifyRequest<{ Body: postShortDTO, Reply: postShortResponse }>

export type postShortRouteOptions = RouteOptions<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  { Body: postShortDTO; Reply: postShortResponse }
>;

export const joiSchema = Joi.object<postShortDTO>()
  .keys({
    url: Joi.string().uri().required(),
  })
  .required()
