import db from '@/db/mod.js'

export const find = async () => {
  return await db.question.findMany()
}

export const findById = async (id: string) => {
  return await db.question.findUnique({ where: { id } })
}
