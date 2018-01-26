var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var crypto = require('crypto');

const decipher = crypto.createDecipher('aes256', 'asaadsaad');

var mongoClient;
mongo.connect("mongodb://localhost:27017/", (err, database) => {
    if (err) throw err;
    mongoClient = database;
});

router.get('/', function(req, res, next) {


    mongoClient.db('test').collection('homework7').findOne({}, (err, item) => {
        if (err)
            console.log(err);
        var hashed = item.message;
        mongoClient.close();

        // console.log(hashed);
        var decryptedMsg = decipher.update(hashed, 'hex', 'utf8');
        decryptedMsg += decipher.final('utf8');
        // console.log(decryptedMsg);
        res.render('message', {message:decryptedMsg});
    });
});

module.exports = router;
