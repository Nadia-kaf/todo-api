import  express from "express";
import todosRoutes from "./routes/todos.routes.js";
import bodyParser from "body-parser";
import cors from "cors";

//create express app
const app = express();


//Apply middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); //form-encode
app.use(cors());


//Use routes 
app.use(todosRoutes);




//Listen for incoming requests
app.listen(4000, ()=>{
    console.log("Express app is running!")
});