const { books } = require("../data/books/books.model");
const { authors } = require("../data/authors/authors.model");

const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

module.exports = resolvers;
