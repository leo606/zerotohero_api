import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import { shortRouter } from './shorting/router'
import { IPluginOptionsBase } from '../app/server.interface'

const rootRouter = fp(async (app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) => {
  app.register(shortRouter, { prefix: '/short' })

  done()
})

export { rootRouter }
