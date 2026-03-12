import express from "express";

const app = express();

function ageCheck(req, res, next) {
    if (!req.query.age || req.query.age < 18) {
        return res.status(403).send('Access denied. You must be at least 18 years old.');
    }
    next();
}

app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/login', ageCheck, (req, res) => {
  res.send('This is the login page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});   

app.get ('/contact', (req, res) => {
    res.send('This is the contact page');
});

app.get('/products', ageCheck,(req, res) => {
    res.send('This is the products page');
});




app.listen(3000, () => {  console.log("Server is running on port 3000");
});