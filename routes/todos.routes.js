import { Router } from "express";

const router = Router();


//Define route 
router.post('/todos', (req, res) =>{
    res.json(req.body)
});

router.get('/todos', (req, res) =>{
    res.send('Get all todos')
});

router.delete('/todos', (req, res) =>{
    res.send('Delete all todos')
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