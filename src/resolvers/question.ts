import { QuestionResolvers } from '@/__generated__/resolvers-types.js'
import userLoader from '@/loaders/user.js'
import * as repo from '@/repository/mod.js'

const Question: QuestionResolvers = {
  // TODO: fix userId
  // - how to solve it ???
  user: async (p: any) => {
    // const user = await repo.user.findById(p.userId)
    const user = await userLoader.load(p.userId)
    return user as any
  },

  answers: async (p) => {
    return (await repo.answer.findByQuestionId(p.id)) as any
  },
}

export default Question
