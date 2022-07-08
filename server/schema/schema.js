const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }

  # ROOT TYPE
  type Mutation {
    createBook(title: String!, genre: String!, authorId: ID!): Book
    createAuthor(name: String!, born: Int!): Author
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
