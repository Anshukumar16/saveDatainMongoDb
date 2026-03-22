import express from 'express';
import { handleUsers } from './controller/usercontroller.js';
const app=express();

app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.send("Working");
});

app.get('/users',handleUsers);

console.log("Starting server");
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
