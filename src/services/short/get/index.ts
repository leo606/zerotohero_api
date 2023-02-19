import { ShortingModel } from '../../../repository/short/model'
import { ShortNotFount } from '../errors/ShortNotFount'

const TEN_MINUTES = 600_000

export async function getBaseUrl(short: string): Promise<string> {
  const shortDocument = await ShortingModel.findOneAndUpdate(
    {
      short,
      isActive: true,
      lastUsedAt: { $gte: Date.now() - TEN_MINUTES },
    },
    {
      $inc: { usageCounter: 1 },
      $set: { lastUsedAt: new Date() },
    }
  ).select('baseUrl')

  if (!shortDocument) {
    void ShortingModel.updateOne({ short }, { $set: { isActive: false } })
    throw new ShortNotFount()
  }

  return shortDocument.baseUrl
}
