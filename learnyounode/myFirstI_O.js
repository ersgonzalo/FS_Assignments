var fs = require('fs');
var filePath = process.argv[2];
//var buf = fs.readFileSync('helloWorld.js'); //located in local directory to test file
var buf = fs.readFileSync(filePath);
var str = buf.toString().split('\n');

console.log(str.length - 1);

