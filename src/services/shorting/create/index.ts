import { ShortingModel } from '../../../repository/shorting/model'

export async function createShortUrl(url: string) {
  console.log('create short url service:', url)
  await ShortingModel.create({alias: 'test', baseUrl: 'test'})
}