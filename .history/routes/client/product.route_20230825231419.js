const express = require("express");
const router = express.Router();

app.get("/products", (req, res) => {
  res.render("client/pages/products/index");
});
