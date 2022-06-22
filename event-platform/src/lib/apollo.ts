import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient(
  {uri:"https://api-sa-east-1.graphcms.com/v2/cl4o3ll6v0czh01xmh2sifbdd/master",
cache: new InMemoryCache()})