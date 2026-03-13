import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const dbName = 'students';
const client = new MongoClient('mongodb://localhost:27017');
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const results = await collection.find().toArray();
    console.log(results);
    res.render('students', { students: results });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});