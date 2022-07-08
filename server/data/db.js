const Book = require("../models/books.model");
const Author = require("../models/authors.model");

const mongoDataMethods = {
  getAllBooks: async () => {
    return await Book.find();
  },
};

module.exports = mongoDataMethods;
