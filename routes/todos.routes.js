import { Router } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";


dotenv.config({path:['.env.local']});
const router = Router();

//connecting to url
const url = process.env.MONGO_URI;

const client = new MongoClient(url);

const todoDb = "todo-db";
const todoCollection = "todos";

//Define route 
router.post('/todos', async (req, res) =>{
    // connect mongodb Client
    await client.connect();
    //get access to todo database 
    const db = client.db(todoDb);
    //get access to todos collection
    const collection = db.collection(todoCollection);
    //add todo document to todos collection
    const result = await collection.insertOne({
        ...req.body,
        isCompleted: false,
        createdAt: new Date()
    });

    //disconnect mongodb client
    await client.close();
     
    //return response
    res.json(result);
});

router.get('/todos', async (req, res) =>{
    // connect mongodb Client
    await client.connect();
    //get access to todo database 
    const db = client.db(todoDb);
    //get access to todos collection
    const collection = db.collection(todoCollection);
    //get all todos document from collection
    const limit = parseInt(req.query.limit) || 4;                                   // turns strings into an integer
    const result = await collection.find({}).limit(limit).toArray();
    //disconnect mongodb client 
    await client.close();
    
    //return response

    res.send(result);
});

router.delete('/todos', async (req, res) =>{
    // connect mongodb Client
    await client.connect();
    //get access to todo database 
    const db = client.db(todoDb);
    //get access to todos collection
    const collection = db.collection(todoCollection);
    //add todo document to todos collection
    const deleteResult = await collection.deleteMany({});

    //disconnect mongodb client
    await client.close();
     
    res.send(deleteResult);
});


router.get( '/todos/:id',(req, res) => {
      res.send(`Get todo with id: ${req.params.id}`);
});

router.patch( '/todos/:id',(req, res) => {
      res.send(`Update todo by id: ${req.params.id}`);
});

router.delete( '/todos/:id',(req, res) => {
      res.send(`Delete todo by id: ${req.params.id}`);
});
//export router 
export default router;