require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const homeRouter = require('./routers/home');
const loginRouter = require('./routers/login');
const accountRouter = require('./routers/account');


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', __dirname, 'views');
app.set('view engine', 'ejs');


//ao indicar os nomes da rotas nao é necessario indicar novamente o nome raiz da rota
//ex para acessar a rota login/auth dentro do login router basta só indicar o nome da rota apos a raiz: /auth
app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/account', accountRouter);

app.listen(port, function(){
    console.log(`app online in ${port}`);
});