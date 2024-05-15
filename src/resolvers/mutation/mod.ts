import { MutationResolvers } from '@/__generated__/resolvers-types.js'
import * as auth from './auth.js'
import * as question from './question.js'

const Mutation: MutationResolvers = {
  ...auth,
  ...question,
}

export default Mutation
