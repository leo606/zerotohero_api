import { ShortingModel } from '../../../model/short/model'
import { ShortNotFount } from '../errors/ShortNotFount'

export async function getBaseUrl(short: string): Promise<string> {
  const shortDocument = await ShortingModel.findOneAndUpdate(
    {
      short,
      isActive: true,
    },
    {
      $inc: { usageCounter: 1 },
      $set: { lastUsedAt: new Date() },
    }
  ).select('baseUrl')

  if (!shortDocument) {
    await ShortingModel.updateOne({ short }, { $set: { isActive: false } })
    throw new ShortNotFount()
  }

  return shortDocument.baseUrl
}
