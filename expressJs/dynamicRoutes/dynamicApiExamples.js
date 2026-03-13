import express from 'express';
import  users  from './users.json' with { type: 'json' };

const app = express();  

app.get ('/api/users', (req, res) => {
    res.send(users);
});

app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const user = users.find(u => u.id === parseInt(userId));

    if (!user) {
        return res.status(404).send('User not found');
    }

    res.send(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});