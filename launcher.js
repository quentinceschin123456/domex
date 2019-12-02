var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/"));

app.get("/.*/", function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);

// eslint-disable-next-line no-console
console.log("Server is loaded ...");