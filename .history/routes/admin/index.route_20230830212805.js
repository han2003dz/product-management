const dashboardRouter = require("./dashboard.route");
const systemConfig = require("../../config/")
module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
