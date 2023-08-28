const express = require("express");

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

const app = express();
const port = 4000;

app.set("views", "./views");
app.set("view engine", "pug");

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("client/pages/home/index");
});

app.get("/products", (req, res) => {
  res.render("client/pages/home/index")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
