import { AnswerResolvers } from '@/__generated__/resolvers-types.js'
import userLoader from '@/loaders/user.js'
import questionLoader from '@/loaders/question.js'

// TODO:
// - fix parent type issue
// - fix dataloader type issue
const Answer: AnswerResolvers = {
  user: async (p: any) => {
    const user = await userLoader.load(p.userId)
    return user as any
  },

  question: async (p: any) => {
    const question = await questionLoader.load(p.questionId)
    return question as any
  },
}

export default Answer
