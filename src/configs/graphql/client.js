import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: "https://api-ap-northeast-1.graphcms.com/v2/ckxrf0w9z0zgj01z9a5hk59j4/master",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});