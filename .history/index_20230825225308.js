const express = require("express");

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("trang chu")
});

app.get("/home", async (req, res) => {
  res.render("home", {
    title: "Trang chu",
    message: "Day la trang chu",
  });
});

app.get("/products", async (req, res) => {
//   const products = await Product.find({});
//   res.render("products", {
//     title: "Danh sach san pham",
//     products: products,
//   });
//   console.log(products);
});

app.get("/about", (req, res) => {
  res.send("Trang About");
});

app.get("/login", (req, res) => {
  res.send("Trang login");
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Trang contact",
    message: "Day la trang lien he",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
