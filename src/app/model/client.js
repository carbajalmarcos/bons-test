import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const httpLink = new HttpLink({
  uri: "http://game.bons.me/graphql",
});

const cache = new InMemoryCache({ addTypename: false });

const client = new ApolloClient({
  link: httpLink, // concat errorLink to authlink and httplink, errorLink will catch errors
  cache,
});

export default client;
