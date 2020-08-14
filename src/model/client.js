import { ApolloClient, InMemoryCache } from "@apollo/client";
const cache = new InMemoryCache({ addTypename: false });
const client = new ApolloClient({
  uri: "http://game.bons.me/graphql",
  cache,
});

export default client;
