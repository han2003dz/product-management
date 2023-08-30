
const dashboardRouter = require("./dashboard.route");

module.exports = (app) => {
  const 
  app.use("/admin/dashboard", dashboardRouter);
};
