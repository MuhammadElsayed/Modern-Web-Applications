var express = require('express');
var router = express.Router();
var fetcher = require('node-fetch');

const USERS_URL = 'http://jsonplaceholder.typicode.com/users/';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end();
  //fetcher(USERS_URL);
});

module.exports = router;
