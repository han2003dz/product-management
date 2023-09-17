// import library
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");

const storageMulter = require("../../helpers/storageMulter");
const upload = multer({ storage: storageMulter() });

//import config
const database = require("./config/database");
require("dotenv").config();
const systemConfig = require("./config/system");

// import route and port
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

// variable env
const port = process.env.PORT;
const parser = process.env.PARSER;

const app = express();
database.connect();

app.set("views", "./views");
app.set("view engine", "pug");

// flash
app.use(cookieParser(`${parser}`));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

// App local variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public"));
app.use(methodOverride("_method"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
route(app);
routeAdmin(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});