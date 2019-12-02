const port = process.env.PORT || 8080;
const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();

// app.use(require('connect-history-api-fallback'));
app.use(serveStatic(path.join(__dirname, '/dist/')));

// app.get(/.*/, function(req, res) {
//     res.sendfile(__dirname + "/dist/index.html");
// });
app.listen(port);