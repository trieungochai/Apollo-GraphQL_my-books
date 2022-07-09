const resolvers = {
  // QUERY
  Query: {
    books: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllBooks(),
    book: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getBookById(id),
    authors: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllAuthors(),
    author: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getAuthorById(id),
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
