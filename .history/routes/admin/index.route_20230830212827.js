const dashboardRouter = require("./dashboard.route");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  const  PATH_ADMIN = systemConfig.
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
