import Fastify from 'fastify'
import { rootRouter } from '../controllers/router'

const app = Fastify({ logger: true })

app.register(rootRouter, { prefix: '/' })

export { app }
