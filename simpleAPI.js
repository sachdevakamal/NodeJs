const http = require('http');

const userData = [
    {
        name: 'Kamal',
        age: 30,
        city: 'Delhi'
    },
    {
        name: 'Puneet',
        age: 25,
        city: 'Mumbai'
    },
    {
        name: 'Amit',
        age: 28,
        city: 'Bangalore'
    }
]

http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(userData));
    res.end();
    
}).listen(4000);

console.log('Server is running on port 4000');