const productRouter = require("./product.route");
const homeRouter = require("./home.route");
const categoryMiddleware = require("../../middlewares/client/category.middleware");
const searchRouter = require("./search.route");
module.exports = (app) => {
  app.use(categoryMiddleware.category);
  app.use("/", homeRouter);
  app.use("/products", productRouter);
  app.use("/search", searchRouter);
};
