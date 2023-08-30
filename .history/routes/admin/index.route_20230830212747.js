const dashboardRouter = require("./dashboard.route");
const systemCon
module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
