const Productrouter = require("")

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("client/pages/home/index");
  });


};
