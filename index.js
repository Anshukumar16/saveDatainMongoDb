import express from 'express';
const app=express();

app.get('/', (req, res) => {
    const users = ['anshu','sonam','peter','akriti'];
    let data=`<ul>`;
    for(let i=0;i<users.length;i++){
        data+=`<li><a href="user/${users[i]}">${users[i]}</li>`
        console.log(users[i]);
    }
    data+='</ul>'
    res.send(data);
});

app.get('/user/:name',(req,res)=>{
    console.log(req.params.name);
    const username = req.params.name;
    res.send(`This is ${username}'s profile`);
})

console.log("Starting server");
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
