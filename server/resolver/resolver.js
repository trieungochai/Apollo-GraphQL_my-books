const { books } = require("../data/books/books.model");
const { authors } = require("../data/authors/authors.model");
const Book = require("../models/books.model");
const Author = require("../models/authors.model");

const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks(),
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },

  Book: {
    author: (parent, args) =>
      authors.find((author) => author.id == parent.authorId),
  },

  Author: {
    books: (parent, args) => books.filter((book) => book.authorId == parent.id),
  },

  // MUTATION
  Mutation: {
    createBook: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createBook(args),
    createAuthor: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createAuthor(args),
  },
};

module.exports = resolvers;
