export interface IPluginOptionsBase {
  prefix: string
}

const shortSchema = {
  type: 'object',
  additionalProperties: false,
  properties: {
    url: { type: 'string' },
  },
  required: ['url'],
} as const

export const sharedSchema = {
  $id: 'shared-schema',
  definitions: {
    user: shortSchema,
  },
} as const
