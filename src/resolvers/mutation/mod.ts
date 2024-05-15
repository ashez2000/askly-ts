import { MutationResolvers } from '@/__generated__/resolvers-types.js'
import * as auth from './auth.js'
import * as question from './question.js'
import * as answer from './answer.js'

const Mutation: MutationResolvers = {
  ...auth,
  ...question,
  ...answer,
}

export default Mutation
