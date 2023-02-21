import {
  FastifyRequest,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteOptions,
} from 'fastify'
import Joi from 'joi'

export interface postLoginDTO {
  username: string;
  password: string;
}

export interface postLoginResponse {
  message: string;
}

export type postLoginRequest = FastifyRequest<{
  Body: postLoginDTO;
  Reply: postLoginResponse;
}>;

export type postLoginRouteOptions = RouteOptions<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  { Body: postLoginDTO; Reply: postLoginResponse }
>;

export const joiSchema = Joi.object<postLoginDTO>()
  .keys({
    username: Joi.string().min(3).max(15).alphanum().required(),
    password: Joi.string().min(6).max(30).required(),
  })
  .required()
