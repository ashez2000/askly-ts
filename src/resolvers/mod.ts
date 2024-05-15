import { Resolvers } from '@/__generated__/resolvers-types.js'

import Mutation from './mutation/mod.js'
import Query from './query/mod.js'

const resolvers: Resolvers = {
  Query,
  Mutation,
}

export default resolvers
