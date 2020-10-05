import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

const uri =
  process.env.NODE_ENV === `production`
    ? `http://localhost:7000/graphql`
    : `http://localhost:7000/graphql`;

export default new ApolloClient({
  uri,
  clientState: {
    defaults,
    resolvers,
  },
});
