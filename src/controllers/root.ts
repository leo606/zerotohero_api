import { FastifyInstance } from 'fastify'
import { shortRouter } from './shorting/router'

function rootRouter(app: FastifyInstance, _opts, done) {
  app.register(shortRouter)
  done()
}

export { rootRouter }