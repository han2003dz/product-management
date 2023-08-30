const dashboardRouter = require("./dashboard.route");
const systemConfig = require("../../con")
module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
