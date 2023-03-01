import mongoose from 'mongoose'
import { app } from './server'
import dotenv from 'dotenv'
import { setInterval } from 'timers'
import { updateShorts } from './cronJobs/updateShorts'

const ONE_MINUTE = 60_000

dotenv.config()

const PORT = 5000

async function serve() {
  try {
    mongoose.set('strictQuery', false)
    await mongoose
      .connect(process.env.MONGO_URI || 'asd', { dbName: 'shortener' })
      .then(async () => {
        await app.listen({ port: PORT, host: '0.0.0.0' })

        setInterval(updateShorts, ONE_MINUTE)

        app.log.info(`server running on port ${PORT}`)
      })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

serve()
