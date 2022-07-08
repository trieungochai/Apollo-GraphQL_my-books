const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  born: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("authors", AuthorsSchema);
