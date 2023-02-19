import crypto from 'crypto'

const SIZE = 6

export function genUniqueShort() {
  const uuid = crypto.randomUUID()
  return uuid.slice(-SIZE)
}
