import { Resolvers } from '@/__generated__/resolvers-types.js'

import Mutation from './mutation/mod.js'
import Query from './query/mod.js'
import Question from './question.js'
import User from './user.js'

const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Question,
}

export default resolvers
