//starting new express project
// in terminal (local folder) run npm init (use -y to accpet all)
//press enter for default settings - createing json file
// npm install express

const express = require('express');
const { send } = require('process');
const app = express();
const { v4: uuidv4 } = require('uuid');
app.use(express.json())

const recycledItems = [
    {
        name: 'Test',
        description: 'test',
        recyclable: true,
        quantity: 1000,
        pricePerUnit: 100,
        _id: uuidv4()
    }
];

app.get('/items', (req,res) =>{
    res.send(recycledItems);
});

app.post('/items', (req,res) =>{
    const newItem = req.body;
    recycledItems.push(newItem);
    console.log(recycledItems)
    res.send("Post Sucessful!")
})

app.listen('3000', () =>{
    console.log('Server running on port 3000')
});

