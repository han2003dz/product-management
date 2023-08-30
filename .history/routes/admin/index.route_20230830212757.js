const dashboardRouter = require("./dashboard.route");
const systemConfig = require("")
module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
