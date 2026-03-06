const http = require('http');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');  
  res.write('<h2>Hello Server</h2>');
  res.end('<p>Hello World</p>');
}).listen(3000);

console.log('Server is running on port 3000');

