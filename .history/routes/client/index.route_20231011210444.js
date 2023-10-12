const productRouter = require("./product.route");
const homeRouter = require("./home.route");
const categoryMiddle


module.exports = (app) => {
  app.use("/", homeRouter);

  app.use("/products", productRouter);
};
