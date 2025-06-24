const express = require('express');
const app = express;
const port = 3000;

app.length('/', function(req, res){
    res.send('hello world');
});

app.listen(port, function(){
    console.log('app online')
});