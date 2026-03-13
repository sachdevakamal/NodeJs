import express from 'express';

const app = express(); 

app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

app.get('/users/:userId', (req, res) => {
    const rawuserId = req.params.userId;
    const userId = rawuserId.charAt(0).toUpperCase() + rawuserId.slice(1);
    res.send(`User ID: ${userId}`);
});

app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId; 
    res.send(`Product ID: ${productId}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});