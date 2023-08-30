const dashboardRouter = require("./dashboard.route");
const 
module.exports = (app) => {
  
  app.use(PATH_ADMIN + "/admin/dashboard", dashboardRouter);
};
