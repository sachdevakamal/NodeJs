import mongoose from "mongoose";
import express from "express";

const app = express();

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/students');
    const studentSchema = new mongoose.Schema({
        name: String,
        age: Number,
        email: String
    });

    const student = mongoose.model('students', studentSchema);

    const students = await student.find();
    console.log(students);
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    connectDB().catch(console.error);
});