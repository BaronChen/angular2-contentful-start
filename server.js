var path = require('path');
var express = require('express');
var app = express();

app.use(express.static('dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join('dist','index.html'));
});


var server = app.listen(4100, function() {
    console.log('Express is listening to http://localhost:4100');
});


