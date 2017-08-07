//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Express Configuration

var app = express();

var PORT = process.env.PORT || 80;

// BodyParser allows server to interpret data sent to it

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Router

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


// Listener, starts server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
