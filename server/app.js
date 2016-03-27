var express = require('express');
var app = express();
var path = require('path');

app.use(express.static (path.join(__dirname, 'public')));

app.get('/*', function (req, res) {
  console.log('indexes route');
  res.sendFile(path.join(__dirname, "./public/views/index.html"));

});

app.set('port', 5000);

app.listen(5000, function () {
  console.log('listening on port ', app.get('port'));
});
