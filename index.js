
import express from 'express';
const app=express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home',{name:'Anshu ' , insta:'_anshu 003', age: 20});
});
app.listen(3000);