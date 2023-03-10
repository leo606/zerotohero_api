export class HttpError extends Error {
  message: string
  code: number

  constructor(message: string, code: number) {
    super(message)
    this.code = code
    this.message = message
  }
}