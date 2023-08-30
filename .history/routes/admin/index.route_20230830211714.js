
const dashboardRoute = require("./home.route");

module.exports = (app) => {
  app.use("/admin/dashboard", dashboardRoute);
};
