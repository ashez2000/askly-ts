import { Resolvers } from '@/__generated__/resolvers-types.js'

import Mutation from './mutation/mod.js'
import Query from './query/mod.js'
import Question from './question.js'
import User from './user.js'
import Answer from './answer.js'

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Question,
  Answer,
}

export default resolvers
