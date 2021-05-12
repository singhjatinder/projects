var express = require('express');
var router = express.Router();

var apiSearch = require("./apiSearch");

// router specs
router.get('/', function(req, res, next) {
    res.send("Nothing Found");
});

//API calls
router.get('/api/', apiSearch);

module.exports = router;