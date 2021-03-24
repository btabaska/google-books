const axios = require("axios");
const router = require("express").Router();
const db = require("../models");
const API_KEY = "AIzaSyAj3hAx2wai9Q1eqtWYz3O9Qsc0mUEpL8g";
const fetch = require("node-fetch");

const {
  findAll,
  createOne,
  deleteOne,
  findOne,
  searchOne,
} = require("../controller/bookController");

router.get("/books/:id", function (req, res) {
  findOne(req, res);
});

router.get("/books", (req, res) => {
  console.log("here");
  findAll(req, res);
});

router.post("/books", function (req, res) {
  createOne(req, res);
});

router.delete("/books", function (req, res) {
  deleteOne(req, res);
});

router.get("/search", function (req, res) {
  searchOne(req, res);
});

module.exports = router;
