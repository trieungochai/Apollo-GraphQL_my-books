const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # ROOT TYPE
  type Query {
    books: [Book]
  }

  type Book {
    id: ID
    title: String
    genre: String
  }
`;

module.exports = typeDefs;
