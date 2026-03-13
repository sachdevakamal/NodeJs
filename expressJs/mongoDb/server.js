import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const dbName = 'students';
const client = new MongoClient('mongodb://localhost:27017');

async function dbConnect() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('students');

    const results = await collection.find().toArray();
    console.log(results);
}

dbConnect().catch(console.error);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});