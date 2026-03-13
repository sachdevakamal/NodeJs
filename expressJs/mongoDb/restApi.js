import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const dbName = 'students';
const client = new MongoClient('mongodb://localhost:27017');
// app.set('view engine', 'ejs');

client.connect().then((connection) => {
    const db = connection.db(dbName);

    app.get('/api/students', async (req, res) => {
        try {
            const studentsCollection = db.collection('students');
            const students = await studentsCollection.find().toArray();
            res.send(students);
            console.log(students);
        } catch (err) {
            console.error(err);
            res.status(500).send('Error fetching students');
        }
    });
    
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});