var express = require('express');
 
var app = express();//Respond with "We are living in Kohlination" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('We are living in Kohlination');
});//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
 
module.exports = app;
