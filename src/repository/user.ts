import argon from 'argon2'

import { AuthInput } from '@/__generated__/resolvers-types.js'
import db from '@/db/mod.js'

export const create = async (input: AuthInput) => {
  const { username, password } = input
  const hash = await argon.hash(password)
  const user = await db.user.create({
    data: {
      username,
      password: hash,
    },
  })

  return user
}

export const findById = async (id: string) => {
  return await db.user.findUnique({ where: { id } })
}

export const findByCredentials = async (input: AuthInput) => {
  const { username, password } = input
  const user = await db.user.findUnique({ where: { username } })
  if (!user) {
    return null
  }

  const isMatch = await argon.verify(user.password, password)
  if (!isMatch) {
    return null
  }

  return user
}
