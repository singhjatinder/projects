// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
//app.use(express.static("public"))

// define the first route
var routes = require('./index');
app.use('/', routes);

app.use(function(req, res) {
    res.status(404);
    res.render('404');
});

// start the server listening for requests
app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));