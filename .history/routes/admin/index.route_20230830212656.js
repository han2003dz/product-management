const dashboardRouter = require("./dashboard.route");

module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
