const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # ROOT TYPE
  type Query {
    books: [Book]
    authors: [Author]
  }

  type Book {
    id: ID!
    title: String!
    genre: String!
  }

  type Author {
    id: ID!
    name: String!
    born: Int!
    books: [Book]
  }
`;

module.exports = typeDefs;
