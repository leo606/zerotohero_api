import { ShortingModel } from '../../../model/short/model'
import { IShort } from '../../../model/short/model/shorting.interface'

export async function listShortsInfos(): Promise<IShort[]> {
  const shortsDocuments = await ShortingModel.find(
    {},
    { _id: 0, baseUrl: 1 },
    { sort: { usageCounter: -1 } }
  )

  return shortsDocuments
}
