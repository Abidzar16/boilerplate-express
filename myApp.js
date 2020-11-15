var express = require('express');
var app = express();
var response = "Hello json";

absolutePath = __dirname + "/views/index.html"

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string)
  next();
});

// Normal usage
app.use(express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }

  res.json({
    "message": response
  });
});

// Assets at the /assets route
app.use("/assets", express.static(__dirname + "/public"));

app.use(function(req, res) {
  res.sendFile(absolutePath);
});

console.log("hello world")

module.exports = app;