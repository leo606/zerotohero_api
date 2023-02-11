import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify({ logger: true })

const PORT = 5000

app.register(cors)

app.get('/', async () => {
  return {
    test: 'this is a test',
  }
})

async function server() {
  try {
    await app.listen({ port: PORT })
    app.log.info(`server running on port ${PORT}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

server()
