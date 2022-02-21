// graphql/schema.ts

import { gql } from 'apollo-server-micro'

export const typeDefs = gql`

  scalar DateTime

  type Warehouse {
    id: ID!
    name: String!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    warehouses: [Warehouse]!
    warehouse(id: String!): Warehouse
  }
`