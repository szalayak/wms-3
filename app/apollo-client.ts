import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client';

type Query = <QV, RT>(name: string, query: DocumentNode, variables?: QV) => Promise<RT>;
type Mutate = <MV, RT>(name: string, mutation: DocumentNode, variables?: MV) => Promise<RT>;

export interface GraphQLClient{
  query: Query;
  mutate: Mutate;
};

export const createGQLClient = (): GraphQLClient => {
  const cache = new InMemoryCache({
    addTypename: false,
    resultCaching: false,
  });

  const client = new ApolloClient({
    cache: cache,
    uri: '/api/graphql'
  });

  const query: Query = async (name, query, variables) => {
    const { data } = await client
          .query({
              query,
              variables,
              fetchPolicy: 'no-cache',
          });
      return data[name];
  };

  const mutate: Mutate = async (name, mutation, variables) => {
    const { data } = await client
          .mutate({
              mutation,
              variables,
          });
      return data[name];
  };

  return { query, mutate };
};