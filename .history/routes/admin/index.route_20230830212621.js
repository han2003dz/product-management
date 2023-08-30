
const dashboardRouter = require("./dashboard.route");

module.exports = (app) => {
  const PATH_ADMIN = "/admin"
  app.use( PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
