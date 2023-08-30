
const dashboardRouter = require("./dashboard.route");

module.exports = (app) => {
  const PATH
  app.use("/admin/dashboard", dashboardRouter);
};
