var express = require("express");
var app = express();
var path = require("path");

/* Needed Folder */
app.use("/", express.static(__dirname + '/content'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/res", express.static(__dirname + '/res'));

/* Local JS Requirement */
app.use("/threejs/js", express.static(__dirname + '/node_modules/three'));

app.listen(3000);
