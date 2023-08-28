const express = require("express")



app.get("/products", (req, res) => {
    res.render("client/pages/products/index");
  });