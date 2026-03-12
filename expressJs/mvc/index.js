import express from 'express';
import { getUsers } from './controller/userController.js';

const app = express();
app.set('view engine', 'ejs');


app.get('/users', getUsers);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});