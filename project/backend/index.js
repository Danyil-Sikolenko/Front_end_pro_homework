const express = require('express'); 
const app = express(); 
const cors = require('cors'); 
app.use(cors());  
app.use(express.json()); 

const PORT = 3000; 

app.listen(PORT, () => {
    console.log('Heloo from my server') 
    
});


const todo = [
    {
        id:1,
        title: 'delectus aut autem',
        completed: true
    },
    {
        id:2,
        title: 'quis ut nam facilis et officia qui',
        completed: false
    },
    {
        id:3,
        title: 'fugiat veniam minus',
        completed: false
    },
    {
        id:4,
        title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
        completed: true
    },
    {
        id:5,
        title: 'qui ullam ratione quibusdam voluptatem quia omnis',
        completed: true
    }

]

app.get('/todos', (req, res) => {  
    res.json(todo);  
});

app.post("/todos", (req, res) => {  
    const { title, completed } = req.body; 

    if (!title) {  
        return res.status(400).json({ message: "Title is required" });
    }

    const newTodo = { id: Math.random(), title, completed: completed || false };  
    todo.unshift(newTodo); 

    res.status(201).json(newTodo);  
});


app.delete('/todos/:id', (req , res) => {
    const toDoID = +req.params.id; 
    const index = todo.findIndex(indexElement => indexElement.id === toDoID); 

    if (index === -1) {
        return res.status(404).json({ message: "Задача не знайдена" });
    }

    todo.splice(index, 1); 
    res.status(204).send();

})


