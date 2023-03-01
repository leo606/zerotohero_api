import { ShortingModel } from '../../model/short/model'

const TEN_MINUTES = 600_000

export async function updateShorts() {
  await ShortingModel.updateMany(
    {
      isActive: true,
      lastUsedAt: { $lt: new Date(Date.now() - TEN_MINUTES) },
    },
    {
      $set: {
        isActive: false
      }
    }
  )
  console.log('cron - shorts updated')
}
