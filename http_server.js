var http = require('http');
const { uniqueNamesGenerator } = require('unique-names-generator');
 
http.createServer(function (req, res) {

  const randomName = uniqueNamesGenerator(); // big_red_donkey
 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Test 4 \n' + randomName);
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
