import fs from 'node:fs'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { Context } from './context.js'
import resolvers from './resolvers/mod.js'

const typeDefs = fs.readFileSync('./schema.gql', 'utf-8')

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
