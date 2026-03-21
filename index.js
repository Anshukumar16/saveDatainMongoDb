
import express from 'express';
const app=express();

app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/addUser',(req,res)=>{
   res.render('addUser');
});

app.post('/submitUser',(req,res)=>{
    console.log(req.body);
    res.render('submitUser',req.body);
});

app.get("/users",(req,res)=>{
   const users =['anil','sahil','satyarth','satyam'];
  // const islogin=true;
    res.render('users',{users:users,islogin:false});
});

app.listen(3200);