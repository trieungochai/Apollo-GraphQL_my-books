const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  type Book {
    id: ID!
    title: String!
    genre: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    born: Int!
    books: [Book]
  }
`;

module.exports = typeDefs;
