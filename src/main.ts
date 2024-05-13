import fs from 'node:fs'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { Resolvers } from './__generated__/resolvers-types.js'
import { Context } from './context.js'

const typeDefs = fs.readFileSync('./schema.gql', 'utf-8')

const resolvers: Resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
}

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async (req) => ({
    req,
  }),
})

console.log(`🚀 Server ready at: ${url}`)
