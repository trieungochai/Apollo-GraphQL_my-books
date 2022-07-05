const { books } = require("../data/books/books.model");
const { authors } = require("../data/authors/authors.model");

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id == args.id),
    authors: () => authors,
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },
};

module.exports = resolvers;
