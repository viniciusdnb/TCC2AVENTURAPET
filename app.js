const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('hello word!');
});

app.listen(port, function(){
    console.log(`app online in ${port}`);
});