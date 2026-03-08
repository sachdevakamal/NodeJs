const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('form.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading form');
      } else {
        res.end(data);
      }
    });
  } else if (req.url === '/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.setHeader('Content-Type', 'text/html');
      const formData = querystring.parse(body);
      res.end(`<h2>Form Submitted</h2><p>Name: ${formData.name}</p><p>Email: ${formData.email}</p>`);
    });
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
}).listen(3000);

console.log('Server is running on port 3000');