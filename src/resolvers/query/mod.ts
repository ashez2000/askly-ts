import { QueryResolvers } from '@/__generated__/resolvers-types.js'
import * as question from './quetion.js'
import * as answer from './quetion.js'

const Query: QueryResolvers = {
  hello: () => 'Hello, world!',
  ...question,
  ...answer,
}

export default Query
