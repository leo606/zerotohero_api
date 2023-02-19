import { FastifyInstance } from 'fastify'
import { IPluginOptionsBase } from '../../../app/server.interface'
import { getShortRoute } from '../get'
import { postShortRoute } from '../post'

async function shortRouter(app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) {
  app.route(getShortRoute)
  app.route(postShortRoute)

  done()
}

export { shortRouter }
