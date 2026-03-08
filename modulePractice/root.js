const http = require('http');
const userForm = require('./userForm');
const userSubmittedData = require('./userSubmittedData');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/') {
        userForm(req, res);
    } else if (req.url === '/submit' && req.method === 'POST') {
        userSubmittedData(req, res);
    }


}).listen(3000, () => {
  console.log('Server is running on port 3000');
});