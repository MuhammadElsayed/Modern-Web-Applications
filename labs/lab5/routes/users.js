var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end();
  //fetcher(USERS_URL);
});

module.exports = router;
