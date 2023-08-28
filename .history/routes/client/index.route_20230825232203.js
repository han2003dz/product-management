const productRouter = require("./product.route");
const homeRouter = require("./home.route");

module.exports = (app) => {
  app.use("/", (req, res) => {
    res.render("client/pages/home/index");
  });

  app.use("/products", productRouter);
};
