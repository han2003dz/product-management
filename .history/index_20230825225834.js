const express = require("express");

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

// app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("client/pages/home")
});

app.get("/products", (req, res) => {
  res.send("trang danh san pham");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
