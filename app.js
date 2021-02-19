const http = require("http");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/add-product", (req, res, next) => {
  console.log("addproduct");
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add book</button></input> </form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
//HELLO
app.use("/hello", (req, res, next) => {
  res.send("<h1>Hello!! </h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Front page </h1>");
});

app.listen(3000);
