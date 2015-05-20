/**
 * Create express app on port 3000
 */
var express = require('express'),
    app = express(),
    port = 3000;

/**
 * Set up  express middleware
 */
    
    // serve angular.js logic
    app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Listening on port ' + port);