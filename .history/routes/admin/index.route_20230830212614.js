
const dashboardRouter = require("./dashboard.route");

module.exports = (app) => {
  const PATH_ADMIN = "/admin"
  app.use( "/admin/dashboard", dashboardRouter);
};
