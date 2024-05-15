import { QueryResolvers } from '@/__generated__/resolvers-types.js'
import * as question from './quetion.js'

const Query: QueryResolvers = {
  hello: () => 'Hello, world!',
  ...question,
}

export default Query
