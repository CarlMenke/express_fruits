const express = require('express')

const fruits = require('./fruits')

const PORT = process.env.PORT || 3001;

const app = express();



app.get(
    '/ping',
    (req, res)=>{
        res.json('pong');
    }
)

app.get('/greet/:name', (req, res)=>{
    res.send(`Why hello there ${req.params.name}`)
})


app.get('/evens/:n', (req, res)=>{
    let arr = [];
    for(let i = 0; i < +req.params.n; i++){
        if(i%2 === 0){arr.push(i)}
    }
    res.send(arr)
})

app.get('/nameLength/:name', (req, res)=>{

    res.send({'nameLength' : req.params.name.length})
})


app.get('/five', (req,res)=>{
    res.send([1,2,3,4,5])
})


app.get('/fruits/:name', (req,res)=>{


    const foundFruit = fruits.filter((fruit) =>{
        console.log(fruit.name, req.params.name)
        return fruit.name.toLowerCase() === req.params.name.toLowerCase()
    })

    res.send(foundFruit)
})



app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})

