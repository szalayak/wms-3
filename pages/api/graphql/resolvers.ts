import { PrismaClient } from '@prisma/client'
import { GraphQLScalarType, Kind } from 'graphql'

interface Context {
  prisma: PrismaClient
  [key: string]: unknown
}

const dateTimeScalar = new GraphQLScalarType({
  name: 'DateTime',
  description: "Date/Time",
  serialize: value => (value as Date).toISOString(),
  parseValue: value => new Date(value as number | string),
  parseLiteral: ast => ast.kind === Kind.INT ? new Date(parseInt(ast.value, 10)) : null
})

export const resolvers = {
  DateTime: dateTimeScalar,
  Query: {
    warehouses: async (
      _parent: unknown,
      _args: unknown,
      { prisma }: Context
    ): Promise<Warehouse[]> => {
      return prisma.warehouse.findMany()
    },
    warehouse: async (
      _parent: unknown,
      { id }: Partial<Warehouse>,
      { prisma }: Context
    ): Promise<Warehouse | null> => {
      return prisma.warehouse.findUnique({ where: { id } })
    },
  },
}
