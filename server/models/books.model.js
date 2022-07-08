const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  authorId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("books", BooksSchema);
