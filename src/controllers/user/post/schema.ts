import {
  FastifyRequest,
  RawReplyDefaultExpression,
  RawRequestDefaultExpression,
  RawServerDefault,
  RouteOptions,
} from 'fastify'
import Joi from 'joi'

export interface postUserDTO {
  username: string;
  email: string;
  password: string;
}

export interface postUserResponse {
  message: string;
}

export type postUserRequest = FastifyRequest<{
  Body: postUserDTO;
  Reply: postUserResponse;
}>;

export type postUserRouteOptions = RouteOptions<
  RawServerDefault,
  RawRequestDefaultExpression,
  RawReplyDefaultExpression,
  { Body: postUserDTO; Reply: postUserResponse }
>;

export const joiSchema = Joi.object<postUserDTO>()
  .keys({
    username: Joi.string().min(3).max(15).alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  })
  .required()
