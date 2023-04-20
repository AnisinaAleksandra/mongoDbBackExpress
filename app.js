const express = require("express");
const path = require("path");
const indexRoutes = require("./routers/index");
const eh = require("express-handlebars");

const app = express();

app.engine("handlebars", eh.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", indexRoutes);
app.use("/explanation", explanationRoutes);
app.listen(3000, () => {
  console.log(">>>   Server start");
});
