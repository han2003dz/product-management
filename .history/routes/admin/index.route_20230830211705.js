
const dashboard = require("./home.route");

module.exports = (app) => {
  app.use("/admin/dashboard", homeRouter);
};
