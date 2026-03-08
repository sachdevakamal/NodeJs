const http = require('http');

http.createServer((req, res) => {
    console.log('Request received', req.headers);
    if(req.url === '/') {
    res.write('Home Page');
    } else if (req.url === '/about') {
        res.write('About Page');
    } else if (req.url === '/contact') {
        res.write('Contact Page');
    } else {
        res.write('Page Not Found');
    }
    res.end();
}).listen(3000);

console.log('Server is running on port 3000');