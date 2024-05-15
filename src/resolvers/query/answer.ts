import { QueryResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'

export const answers: QueryResolvers['answers'] = async () => {
  return await repo.answers.find()
}

export const answer: QueryResolvers['answer'] = async (_, args) => {
  return await repo.answers.findById(args.id)
}
