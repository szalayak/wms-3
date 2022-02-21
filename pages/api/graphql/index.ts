import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import Cors from 'micro-cors'
import { createContext } from './context'

const cors = Cors()

const apolloServer = new ApolloServer({ typeDefs, resolvers, context: createContext })

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }
  await startServer

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}