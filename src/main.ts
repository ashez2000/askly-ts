import fs from 'node:fs'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = fs.readFileSync('./schema.gql', 'utf-8')

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
}

const server = new ApolloServer({
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
