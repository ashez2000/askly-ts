import { UserResolvers } from '@/__generated__/resolvers-types.js'
import * as repo from '@/repository/mod.js'

const User: UserResolvers = {
  questions: async (p) => {
    // TODO: fix type issue
    return (await repo.question.findByUserId(p.id)) as any
  },
}

export default User
