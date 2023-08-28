const express = require("express");

// const kitty = new Cat({ name: "Zildjian" });
// kitty.save().then(() => console.log("meow"));

const app = express();
const port = 4000;

app.set("views", "./views");
app.set("view engine", "pug");


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
