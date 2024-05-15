import { QuestionResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'

const Question: QuestionResolvers = {
  // TODO: fix userId
  // - how to solve it ???
  user: async (p: any) => {
    const user = await repo.user.findById(p.userId)
    return user as any
  },
}

export default Question
