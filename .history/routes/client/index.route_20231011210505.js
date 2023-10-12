const productRouter = require("./product.route");
const homeRouter = require("./home.route");
const categoryMiddleware = require("../../middlewares/client/category")


module.exports = (app) => {
  app.use("/", homeRouter);

  app.use("/products", productRouter);
};
