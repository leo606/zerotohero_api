import { FastifyInstance } from 'fastify'
import { IPluginOptionsBase } from '../../../app/server.interface'
import { postUserRoute } from '../post'

async function userRouter(app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) {
  app.route(postUserRoute)

  done()
}

export { userRouter }