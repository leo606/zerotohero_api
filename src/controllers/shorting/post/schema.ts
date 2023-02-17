import { FastifyRequest } from 'fastify'
import Joi from 'joi'

export interface IBasePostUrlSchema {
  url: string;
}

export interface postUrlRequest extends FastifyRequest {
  body: IBasePostUrlSchema;
}

export const joiSchema = Joi.object<IBasePostUrlSchema>()
  .keys({
    url: Joi.string().required(),
  })
  .required()
