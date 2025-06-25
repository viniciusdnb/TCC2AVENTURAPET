const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('./router/homeRouter');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', __dirname, 'views');
app.set('view engine', 'ejs');

app.use('/', homeRouter);


app.listen(port, function(){
    console.log(`app online in ${port}`);
});