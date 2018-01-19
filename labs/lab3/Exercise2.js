const http = require("http");
const fs = require("fs");

//using pipes - Asynchronous
http.createServer(function (req, res) {
    fs.createReadStream("./image.jpg").pipe(res);
}).listen(5000, '127.0.0.1');


//using buffer - Asynchronous
http.createServer(function (req, res) {
    //res.writeHead(200, {'Content-Type': 'image/jpeg'});
    fs.readFile('./image.jpg', function (err, image) {
        if (err) throw err;
        res.end(image);
    });
}).listen(5001, '127.0.0.1');

//using buffer - Synchronous
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    let image = fs.readFileSync(__dirname + '/image.jpg');
    res.end(image);
}).listen(5002, '127.0.0.1');
