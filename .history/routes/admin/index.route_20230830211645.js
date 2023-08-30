const productRouter = require("./product.route");
const homeRouter = require("./home.route");

module.exports = (app) => {
  app.use("/admin/dashb", homeRouter);

  app.use("/products", productRouter);
};
