var express = require("express");
var app = express();


var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});