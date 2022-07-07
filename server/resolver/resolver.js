const { books } = require("../data/books/books.model");
const { authors } = require("../data/authors/authors.model");

const resolvers = {
  // QUERY
  Query: {
    books: () => books,
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
    createBook: (parent, args) => args,
    createAuthor: (parent, args) => args,
  },
};

module.exports = resolvers;
