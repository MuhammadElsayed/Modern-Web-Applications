const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

var reader = fs.createReadStream(__dirname + '/problem4.gz');
var decompressed = fs.createWriteStream(__dirname + '/problem4.txt');

reader.pipe(gunzip).pipe(decompressed);