
const homeRouter = require("./home.route");

module.exports = (app) => {
  app.use("/admin/dashboard", homeRouter);

  app.use("/products", productRouter);
};
