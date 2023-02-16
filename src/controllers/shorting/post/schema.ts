import Joi from 'joi'

export interface IBasePostUrlSchema {
  url: string;
}

export const joiSchema = Joi.object<IBasePostUrlSchema>()
  .keys({
    url: Joi.string().required(),
  })
  .required()
