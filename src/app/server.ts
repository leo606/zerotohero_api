import Fastify, { FastifyInstance } from 'fastify'
import { rootRouter } from '../controllers/rootRouter'

const app: FastifyInstance = Fastify({ logger: true })

app.register(rootRouter, { prefix: '/' })

export { app }
