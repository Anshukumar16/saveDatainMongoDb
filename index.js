import express from 'express';
import { MongoClient } from 'mongodb';
const dbName = 'youtube-app-1';
const url="mongodb://localhost:27017";

const client = new MongoClient(url);

const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');

client.connect().then((connection)=>{
  const db=  connection.db(dbName);

    app.get("/api",async(req,res)=>{
        const collection = db.collection("students");
        const students = await collection.find().toArray();
        res.send(students);
    });

    app.get("/ui",async(req,res)=>{
        const collection = db.collection("students");
        const students = await collection.find().toArray();
       res.render('students',{students})
    });

    app.get('/add',(req,res)=>{
        res.render('add-student')
    })
    app.post("/add-student",async(req,res)=>{
       // console.log(req.body);
        const collection = db.collection("students");
        const result=await collection.insertOne(req.body);
        console.log(result)
        // const students = await collection.find().toArray();
        res.send("data saved");
    });

    
})


// app.get('/', async(req, res) => {
//     await client.connect()
//     const db=client.db(dbName);
//     const collection=db.collection('students');
//     const students = await collection.find().toArray();
//     console.log(students);

//     res.render('students', {students});
   
// });

app.listen(3300);