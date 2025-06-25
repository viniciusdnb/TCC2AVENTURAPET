const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const loginValidator = require('../validators/loginValidator');
const {validationResult} = require('express-validator');

router.get('/', function(req, res){
    loginController.index(req,res);
});

//ao indicar os nomes da rotas nao é necessario indicar novamente o nome raiz da rota
//ex para acessar a rota login/auth dentro do login router basta só indicar o nome da rota apos a raiz: /auth

router.post('/auth',
    loginValidator,
    function(req, res){
        const errorResult = validationResult(req);
       
        if(!errorResult.isEmpty()){
            var errorValidator = errorResult.array();
            return loginController.index(req, res, errorValidator);
        };

        

})

module.exports = router;