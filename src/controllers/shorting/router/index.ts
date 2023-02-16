import { FastifyInstance } from 'fastify'
import { IPluginOptionsBase } from '../../../app/server.interface'
import { getRoute } from '../get'
import { postRoute } from '../post'

async function shortRouter(app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) {
  app.route(getRoute)
  app.route(postRoute)

  done()
}

export { shortRouter }
