// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send(`
// <h1>Home Page</h1>`)});

// app.get('/about', (req, res) => {
//     res.send(`
// <h1>About Page</h1>`)});

// console.log(app);
// //   This will show the structure of the Express app object in the console

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// }); 

// One way to create a server using Express.js is to use the `express` module, which provides a simple and flexible way to handle HTTP requests and responses. Here's an example of how to create a basic server using Express.js:

// import express from 'express';
// import homePage from './exports.js';
// import { aboutPage, contactPage } from './exports.js';
// const app = express();

// app.get('/', (req, res) => {
//     res.send(homePage())});

// app.get('/about', (req, res) => {
//     res.send(aboutPage())});

// app.get('/contact', (req, res) => {
//     res.send(contactPage())});

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// video 27: rendering html elements and forms 
// import express from 'express';
// import homePage, { loginPage, submitPage } from './exports.js';
// const app = express();

// app.get('/', (req, res) => {
//     res.send(homePage()
//     )});

// app.get('/login', (req, res) => {
//     res.send(loginPage())});

// app.post('/submit', (req, res) => {
//     // Here you would typically handle the login logic, such as validating the username and password
//     res.send(submitPage());
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

// Video 28: rendering full html pages using express

import express from 'express';
import { absolutePath } from './exports.js';
import { publicPath } from './exports.js';

const app = express();
app.use(express.static(publicPath()));

app.get('/', (req, res) => {
    res.sendFile(absolutePath() + '/home.html');
});

app.get('/login', (req, res) => {
    res.sendFile(absolutePath() + '/login.html');
});

app.use((req, res) => {
    res.status(404).sendFile(absolutePath() + '/404.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});