import { AnswerInput } from '@/__generated__/resolvers-types.js'
import db from '@/db/mod.js'

export const find = async () => {
  return await db.answer.findMany()
}

export const findById = async (id: string) => {
  return await db.answer.findUnique({ where: { id } })
}

export const create = async (input: AnswerInput & { userId: string }) => {
  return await db.answer.create({
    data: input,
  })
}

export const update = async (id: string, input: AnswerInput) => {
  return await db.answer.update({
    where: { id },
    data: input,
  })
}

export const remove = async (id: string) => {
  return await db.answer.delete({ where: { id } })
}
