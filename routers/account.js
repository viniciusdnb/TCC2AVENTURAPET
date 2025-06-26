const express = require('express');
const router = express.Router();
const {validationResult} = require('express-validator');
const accountController = require('../controllers/accountController');
const accountValidator = require('../validators/accountValidator');

router.get('/', function(req, res){
    accountController.index(req, res);
});

router.get('/new-account',
    accountValidator,
    function(req, res){
        const errorResult = validationResult(req);
        //se nao estiver vazio retorna para pagina incial
        if(!errorResult.isEmpty()){
            const errorValidator = errorResult.array();
            return accountController.index(req, res, errorValidator)
        }
        
        accountController.newAccount(req, res);
})

module.exports = router;

