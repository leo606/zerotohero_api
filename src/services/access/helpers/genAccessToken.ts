import jwt from 'jsonwebtoken'

export function genAccessToken(data: Record<string, any>) {
  const token = jwt.sign(data, process.env.JWT_TOKEN_SECRET || 'password', {
    algorithm: 'HS512',
    expiresIn: '7d',
  })

  return token
}
