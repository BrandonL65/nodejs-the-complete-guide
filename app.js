const http = require("http");
const express = require("express");
const app = express();

const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 ERROR PAGE NOT FOUND </h1>`);
});

app.listen(3000);
