import express from 'express';
import userData from './user.json' with { type: 'json' };
const app=express();

app.get('/', (req, res) => {
    console.log(userData);
    res.send(userData);
});


app.get('/user/:id', (req, res) => {
    const id= req.params.id;
    let filterData = userData.filter((user)=>user.id == id);
    res.send(filterData);
});

app.get('/username/:name', (req, res) => {
    const name= req.params.name;
    let filterData = userData.filter((user)=>user.name.toLocaleLowerCase() == name.toLowerCase());
    res.send(filterData);
});
console.log("Starting server");
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
