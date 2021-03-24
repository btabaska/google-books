const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, "You must enter a title."],
  },
  authors: {
    type: Array,
    required: false,
  },
  publisher: {
    type: String,
    required: false,
  },
  publishedDate: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    default: false,
  },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
