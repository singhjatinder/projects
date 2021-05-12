const express = require('express');
const router = express.Router();

const slackModule = require('../modules/slackModule.js');

router.post('/', slackModule.jay);

router.get('/oauth',slackModule.oauth);

router.post('/swarm', slackModule.swarm);

router.get('/stocks',slackModule.stocks);

module.exports = router;