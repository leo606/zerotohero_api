import mongoose from 'mongoose'
import { app } from './server'
import dotenv from 'dotenv'

dotenv.config()

const PORT = 5000

async function serve() {
  try {
    mongoose.set('strictQuery', false)
    await mongoose
      .connect(process.env.MONGO_URI || 'asd', { dbName: 'shortener' })
      .then(async () => {
        await app.listen({ port: PORT, host: '0.0.0.0' })
        app.log.info(`server running on port ${PORT}`)
      })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

serve()
