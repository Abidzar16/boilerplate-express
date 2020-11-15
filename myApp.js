var express = require('express');
var app = express();
var response = "Hello World";

if (process.env.MESSAGE_STYLE === "uppercase") {
  response = "Hello World".toUpperCase();
} else {
  response = "Hello World";
}

absolutePath = __dirname + "/views/index.html"

// Normal usage
app.use(express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
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