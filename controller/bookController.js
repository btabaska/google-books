const db = require("../models");
const fetch = require("node-fetch");
const axios = require("axios");

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
      .then((data) => {
        console.log(req.body.title + " Inserted.");
      })
      .catch((err) => {
        // If an error occurred, send it to the client
        res.json(err);
      });
  },
  deleteOne: function (req, res) {
    db.Book.deleteOne({ _id: req.body._id })
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
  searchOne: async function (req, res) {
    var data = await axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${req.query.searchParam}&key=${process.env.API_KEY}`
      )
      .then((searchResult) => res.json(searchResult.data))
      .catch((err) => console.log(err));
    return data;
  },
};
