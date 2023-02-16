import { app } from './server'

const PORT = 5000

async function serve() {
  try {
    await app.listen({ port: PORT, host: '0.0.0.0' })
    app.log.info(`server running on port ${PORT}`)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

serve()
