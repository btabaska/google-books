const db = require("../models");
const fetch = require("node-fetch");
const API_KEY = "AIzaSyAj3hAx2wai9Q1eqtWYz3O9Qsc0mUEpL8g";

module.exports = {
  findAll: function (req, res) {
    db.Book.find({})
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => {
        res.json(err);
      });
  },
  createOne: function (req, res) {
    db.Book.create(req.body)
      .then((dbUser) => {
        // If we were able to successfully create a User, send it back to the client
        res.json(dbUser);
        console.log("saved:" + dbUser);
      })
      .catch((err) => {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  deleteOne: function (req, res) {
    db.Book.deleteOne({ _id: req.params.id })
      .then((dbLogEvent) => {
        console.log("event deleted"), res.json(dbLogEvent);
      })
      // Gotta catch all them errors!
      .catch((err) => {
        res.json(err);
      });
  },
  findOne: function (req, res) {
    db.Book.findById({ id: req.params.id })
      .then((dbResponse) => res.json(dbResponse))
      .catch((err) => {
        res.json(err);
      });
  },
  searchOne: function (req, res) {
    console.log(req.body.searchParam);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${req.body.searchParam}&key=${API_KEY}`
    )
      .then((searchResult) => searchResult.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
};
