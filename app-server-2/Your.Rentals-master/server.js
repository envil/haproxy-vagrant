var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/')); // ← adjust
app.listen(8090, '0.0.0.0', function() {
  console.log('Server running at http://127.0.0.1:8090');
});

const opn = require('opn')
console.log('Opening home page at http://localhost:8090/');
opn('http://localhost:8090/')
