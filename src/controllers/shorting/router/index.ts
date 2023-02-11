import { FastifyInstance } from 'fastify'
import { shortGet } from '../get'

function shortRouter(app: FastifyInstance, _opts, done) {
  app.get('/short', shortGet)
  done()
}

export {shortRouter}