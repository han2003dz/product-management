const dashboardRouter = require("./dashboard.route");
const systemConfig = re
module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
