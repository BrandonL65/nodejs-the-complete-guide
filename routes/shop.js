const express = require("express");
const router = express.Router();

router.get("/hello", (req, res, next) => {
  res.send("<h1>Hello!! </h1>");
});

router.get("/", (req, res, next) => {
  res.send("<h1>Front page </h1>");
});

module.exports = router;
