import { FastifyInstance } from 'fastify'
import { IPluginOptionsBase } from '../../../app/server.interface'
import { shortGet } from '../get'
import { shortPost } from '../post'

function shortRouter(app: FastifyInstance, _opts: IPluginOptionsBase, done: () => void) {
  app.route({
    method: 'GET',
    url: '/',
    handler: shortGet,
  })



  app.post('/', shortPost)

  done()
}

export { shortRouter }
