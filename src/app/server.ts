import Fastify from 'fastify'
import { rootRouter } from '../controllers/root'

const app = Fastify({ logger: true })

app.register(rootRouter)

// app.get('/', async () => {
//   return {
//     test: 'this is a test',
//   }
// })

export { app }

