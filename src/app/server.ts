import Fastify, { FastifyInstance } from 'fastify'
import { rootRouter } from '../controllers/rootRouter'
import { Server, IncomingMessage, ServerResponse } from 'http'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify({ logger: true })

app.register(rootRouter, { prefix: '/' })

export { app }
