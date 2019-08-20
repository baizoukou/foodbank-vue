const express = require('express');
const path = require('path');

const app = express();
// app.use(serveStatic(__dirname + "/dist"));
app.use(express.static(path.join(__dirname, '/dist')));

app.set('views', path.join(__dirname, '/dist'));

app.use('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})


var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);