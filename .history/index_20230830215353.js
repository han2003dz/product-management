const express = require("express");
const database = require("./config/database");
require("dotenv").config();

const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

const app = express();
database.connect();
const port = process.env.PORT;

const systemConfig = require("./c");

app.set("views", "./views");
app.set("view engine", "pug");

// App local variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public"));
// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
