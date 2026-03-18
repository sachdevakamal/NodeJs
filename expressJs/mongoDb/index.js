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

app.get('/add-student', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

   res.render('add-student');
});

app.post('/added-student', express.urlencoded({ extended: true }), async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const newStudent = {
        name: req.body.name,
        age: parseInt(req.body.age),
        email: req.body.email
    };

    await collection.insertOne(newStudent);
    res.send('Student added successfully');
});

app.post('/api/add-student', express.json(), async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const newStudent = {
        name: req.body.name,
        age: parseInt(req.body.age),
        email: req.body.email
    };

    await collection.insertOne(newStudent);
    res.json({ message: 'Student added successfully' });
});

app.delete('/api/delete-student/:id', async (req, res) => {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const studentId = req.params.id;
    await collection.deleteOne({ _id: new MongoClient.ObjectId(studentId) });
    res.json({ message: 'Student deleted successfully' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});