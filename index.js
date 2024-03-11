import  express from "express";
import todosRoutes from "./routes/todos.routes.js";
import bodyParser from "body-parser";

//create express app
const app = express();

//Apply middlewares
app.use(bodyParser.json());


//Use routes 
app.use(todosRoutes);




//Listen for incoming requests
app.listen(4000, ()=>{
    console.log("Express app is running!")
});