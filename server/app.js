const express = require("express");
const { ApolloServer } = require("apollo-server-express");

const app = express();
const PORT = process.env.PORT || 4000;

// Load schema & resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
