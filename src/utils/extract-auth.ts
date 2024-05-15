import { Context } from '@/context.js'
import { verifyToken } from './jwt.js'

export const extractAuth = (ctx: Context) => {
  const token = ctx.req.req.headers.authorization
  if (!token) {
    return null
  }

  return verifyToken(token)
}
