const systemConfig = require("../../config/system");
const dashboardRouter = require("./dashboard.route");
const productRouter = require("./product.route");
const productCategoryRouter = require("/")
module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(PATH_ADMIN + "/dashboard", dashboardRouter);
  app.use(PATH_ADMIN + "/products", productRouter);
};