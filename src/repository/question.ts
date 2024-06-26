import { QuestionInput } from '@/__generated__/resolvers-types.js'
import db from '@/db/mod.js'

export const find = async () => {
  return await db.question.findMany()
}

export const findById = async (id: string) => {
  return await db.question.findUnique({ where: { id } })
}

export const findByUserId = async (userId: string) => {
  return await db.question.findMany({ where: { userId } })
}

export const create = async (input: QuestionInput & { userId: string }) => {
  return await db.question.create({
    data: input,
  })
}

export const update = async (id: string, input: QuestionInput) => {
  return await db.question.update({
    where: { id },
    data: input,
  })
}

export const remove = async (id: string) => {
  return await db.question.delete({ where: { id } })
}
