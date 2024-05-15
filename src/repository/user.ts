import argon from 'argon2'
import db from '@/db/mod.js'

type AuthInput = {
  username: string
  password: string
}

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
  const hash = await argon.hash(password)
  const user = await db.user.findFirst({
    where: {
      username,
      password: hash,
    },
  })

  return user
}
