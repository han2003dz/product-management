const productRouter = require("./product.route");
const homeRouter = require("./home.route");
const categoryMiddleware = 


module.exports = (app) => {
  app.use("/", homeRouter);

  app.use("/products", productRouter);
};
