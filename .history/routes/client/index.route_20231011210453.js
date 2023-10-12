const productRouter = require("./product.route");
const homeRouter = require("./home.route");
const categoryMiddleware = require("../../")


module.exports = (app) => {
  app.use("/", homeRouter);

  app.use("/products", productRouter);
};
