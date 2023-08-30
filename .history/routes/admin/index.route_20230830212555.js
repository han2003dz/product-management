
const dashboardRouter = require("./dashboard.route");

module.exports = (app) => {
  const PATH_ADMIN = ""
  app.use("/admin/dashboard", dashboardRouter);
};
