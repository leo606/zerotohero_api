import { PipelineStage } from 'mongoose'
import { ShortingModel } from '../../../model/short/model'
import { IShort } from '../../../model/short/model/shorting.interface'

export async function listShorts(
  protocol: string,
  hostname: string
): Promise<IShort[]> {
  console.log({ protocol })
  const baseUrl = `${protocol}://${hostname}/`

  const pipeline: PipelineStage[] = [
    { $match: { isActive: true } },
    { $sort: { usageCounter: -1 } },
    { $project: { _id: 0, shortUrl: { $concat: [baseUrl, '$short'] } } },
  ]

  const shortsDocuments = await ShortingModel.aggregate(pipeline)

  return shortsDocuments
}
