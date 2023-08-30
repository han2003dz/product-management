const dashboardRouter = require("./dashboard.route");
const systemConfig = require("../../config/system");

module.exports = (app) => {
  const  PA
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
