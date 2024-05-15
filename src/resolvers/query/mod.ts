import { QueryResolvers } from '@/__generated__/resolvers-types.js'
import * as question from './quetion.js'
import * as answer from './quetion.js'
import * as user from './user.js'

const Query: QueryResolvers = {
  hello: () => 'Hello, world!',
  ...question,
  ...answer,
  ...user,
}

export default Query
