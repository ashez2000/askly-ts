import { createSigner, createVerifier } from 'fast-jwt'

const secret = process.env.JWT_SECRET || 'secret_key'

const sign = createSigner({ key: secret })
const verify = createVerifier({ key: secret })

export type JwtPayload = { id: string }

export const signToken = (payload: JwtPayload) => {
  return sign(payload)
}

export const verifyToken = (token: string) => {
  try {
    return verify(token) as JwtPayload
  } catch (err) {
    console.error(err)
    return null
  }
}
