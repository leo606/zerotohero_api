import { FastifyInstance } from 'fastify'
import { postLoginRouter } from '../post'
import { IPluginOptionsBase } from '../../../app/server.interface'

async function loginRouter(app:FastifyInstance, _opt: IPluginOptionsBase, done: () => void ) {
  app.route(postLoginRouter)

  done()
}

export { loginRouter }