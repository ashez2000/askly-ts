import { MutationResolvers } from '@/__generated__/resolvers-types.js'
import * as auth from './auth.js'

const Mutation: MutationResolvers = {
  ...auth,
}

export default Mutation
