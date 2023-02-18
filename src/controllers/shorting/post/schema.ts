import {
  FastifyRequest,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteOptions,
} from 'fastify'
import Joi from 'joi'

export interface postUrlDTO {
  url: string;
}

export interface postUrlResponse {
  message: string;
}

export type postUrlRequest = FastifyRequest<{ Body: postUrlDTO, Reply: postUrlResponse }>

export type postUrlRouteOptions = RouteOptions<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  { Body: postUrlDTO; Reply: postUrlResponse }
>;

export const joiSchema = Joi.object<postUrlDTO>()
  .keys({
    url: Joi.string().uri().required(),
  })
  .required()
