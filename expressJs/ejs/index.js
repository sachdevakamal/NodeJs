import express from 'express';
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send( 'Welcome to EJS');
});

app.get('/add-user', (req, res) => {
    res.render('addUser');
});

app.post('/submit', (req, res) => {
    // Handle form submission and add user logic here
    console.log(req.body.username); // Example: log the submitted username
    console.log(req.body.email); // Example: log the submitted email
    console.log(req.body.age); // Example: log the submitted age
    res.render('userAdded', { username: req.body.username, email: req.body.email, age: req.body.age });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
