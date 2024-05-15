import { QueryResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'

export const questions: QueryResolvers['questions'] = async () => {
  return await repo.question.find()
}

export const question: QueryResolvers['question'] = async (_, args) => {
  return await repo.question.findById(args.id)
}
