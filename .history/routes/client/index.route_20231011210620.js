const productRouter = require("./product.route");
const homeRouter = require("./home.route");
const categoryMiddleware = require("../../middlewares/client/category.middleware");

module.exports = (app) => {
  app.use("/", homeRouter);
  app.use(categoryMiddleware.category);
  app.use("/products", productRouter);
};
