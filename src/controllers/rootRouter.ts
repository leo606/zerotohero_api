import fp from 'fastify-plugin'
import { FastifyInstance } from 'fastify'
import { shortRouter } from './short/router'
import { IPluginOptionsBase } from '../app/server.interface'
import { userRouter } from './user/router'

const rootRouter = fp(async (app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) => {
  app.register(shortRouter)
  app.register(userRouter)

  done()
})

export { rootRouter }
