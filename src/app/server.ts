import Fastify, { FastifyInstance } from 'fastify'
import { rootRouter } from '../controllers/rootRouter'
import { Server, IncomingMessage, ServerResponse } from 'http'
import { errorHandler } from '../controllers/middlewares/error'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify({ logger: true })

app.setErrorHandler(errorHandler)

app.register(rootRouter, { prefix: '/' })

export { app }
