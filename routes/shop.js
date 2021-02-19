const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/hello", (req, res, next) => {
  res.send("<h1>Hello!! </h1>");
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
