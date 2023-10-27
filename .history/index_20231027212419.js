// import library
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const path = require("path");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

//import config
const database = require("./config/database");
require("dotenv").config();
const systemConfig = require("./config/system");
const moment = require("moment");
// import route and port
const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

// variable env
const port = process.env.PORT;
const parser = process.env.PARSER;

const app = express();
database.connect();

// socket io
const server = createServer(app);
const io = new Server(server);
global._io = io;
// end socket io

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

// flash
app.use(cookieParser(`${parser}`));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

// tinyMce
app.use(
  "/tinymce",
  express.static(path.join(__dirname, "node_modules", "tinymce"))
);

// App local variable
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.locals.moment = moment;

app.use(express.static(`${__dirname}/public`));
app.use(methodOverride("_method"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
route(app);
routeAdmin(app);
app.get("*", (req, res) => {
  res.render("client/pages/errors/404", {
    pageTitle: "404 Not Found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
