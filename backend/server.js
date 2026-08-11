const express = require('express');
const app = express()

app.get('/', (req,res)=>{
    res.send('hello server 1')
});
app.get('/', (req,res)=>{
    res.send('Second server from shahab run successfully')
});

app.get('/', (req,res)=>{
    res.send('Third server from babar run successfully')
});


app.listen(3000, ()=>{
    console.log('server run successfully');
    
})