const Book = require("../models/books.model");
const Author = require("../models/authors.model");

const mongoDataMethods = {
  getAllBooks: async () => await Book.find(),
  getBookById: async (id) => await Book.findById(id),
  getAllAuthors: async () => await Author.find(),
  getAuthorById: async (id) => await Author.findById(id),
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
};

module.exports = mongoDataMethods;
