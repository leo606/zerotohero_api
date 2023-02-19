import { ShortingModel } from '../../../repository/short/model'

export async function createShortUrl(url: string): Promise<string> {
  const shortDocument = await ShortingModel.findOneAndUpdate(
    { baseUrl: url },
    { $set: { isActive: true, lastUsedAt: new Date() } }
  )

  if (shortDocument) {
    return shortDocument.short
  }

  const newShort = await ShortingModel.create({ baseUrl: url })
  return newShort.short
}
