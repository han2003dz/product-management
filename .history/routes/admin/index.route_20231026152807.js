const systemConfig = require("../../config/system");
const dashboardRouter = require("./dashboard.route");
const productRouter = require("./product.route");
const productCategoryRouter = require("./products-category.route");
const roleRouter = require("./role.route");
const accountRouter = require("./account.route");
const authRoutes = require("./auth.route");
const myAccountRouter = require("./my-account.route");
const settingRouter = require("./setting.route");


const authMiddleware = require("../../middlewares/admin/auth.middleware");
module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin;
  app.use(
    PATH_ADMIN + "/dashboard",
    authMiddleware.requireAuth,
    dashboardRouter
  );
  app.use(PATH_ADMIN + "/products", authMiddleware.requireAuth, productRouter);
  app.use(
    PATH_ADMIN + "/products-category",
    authMiddleware.requireAuth,
    productCategoryRouter
  );
  app.use(PATH_ADMIN + "/roles", authMiddleware.requireAuth, roleRouter);
  app.use(PATH_ADMIN + "/accounts", authMiddleware.requireAuth, accountRouter);
  app.use(PATH_ADMIN + "/auth", authRoutes);
  app.use(
    PATH_ADMIN + "/my-account",
    authMiddleware.requireAuth,
    myAccountRouter
  );
  app.use(PATH_ADMIN + )
};
