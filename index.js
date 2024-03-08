import  express from "express";
//const express =require("express");

//create express app
const app = express();

//Define your route
app.get('/', (req, res) => {
    //console.log(req.query, req.headers);
    res.send("Request uploading");
});

app.get('/ping', (req, res) => {
    res.send("Ping pong");
});
app.get('/file', (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
    console.log(process.cwd());
});

//Listen for incoming requests
app.listen(4000, ()=>{
    console.log("Express app is running!")
});