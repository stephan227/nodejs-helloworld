var http = require('http');
const helloWorld = process.env.HELLO_WORLD;

const secondHelloWorld = process.env.SECOND_HELLO_WORLD;
console.log(helloWorld, secondHelloWorld)
const { uniqueNamesGenerator } = require('unique-names-generator');
 
http.createServer(function (req, res) {
  const randomName = uniqueNamesGenerator();
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(`${helloWorld} <- ENV Test -> ${secondHelloWorld} + ${randomName}`);
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000/');
