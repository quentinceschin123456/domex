var express = require('express');
var app = express();
var serveStatic = require('serve-static');

var port = process.env.PORT || 8080;

app.use(history({
    // OPTIONAL: Includes more verbose logging
    verbose: true
}))

app.use(serveStatic(__dirname + '/dist'));


app.listen(port);

// eslint-disable-next-line no-console
console.log("Server is loaded ...");