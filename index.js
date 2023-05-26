const express = require('express');
const app = express();
const cors =require('cors')
const port =  process.env.PORT || 5000;

const chef = require('./data/chef.json')

app.use(cors())



app.get('/', (req, res)=>{
    res.send('Hello World')

})
app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/chef/:id',(req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChef = chef.find(c=>c.id === id)
    res.send(selectedChef)
})


app.listen(port, ()=>{
    console.log(`Server Running: ${port}`);
}) 