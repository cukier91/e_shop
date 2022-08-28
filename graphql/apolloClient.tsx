import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl6zfyxyy0e7p01ujbdvzfrft/master", //content-api
  cache: new InMemoryCache(),
});