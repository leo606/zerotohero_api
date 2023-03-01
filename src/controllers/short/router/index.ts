import { FastifyInstance } from 'fastify'
import { IPluginOptionsBase } from '../../../app/server.interface'
import { getShortRoute } from '../get'
import { getAllShortsRoute } from '../getAll'
import { getAllShortsInfoRoute } from '../getAllInfos'
import { postShortRoute } from '../post'

async function shortRouter(app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) {
  app.route(getShortRoute)
  app.route(postShortRoute)
  app.route(getAllShortsRoute)
  app.route(getAllShortsInfoRoute)

  done()
}

export { shortRouter }
