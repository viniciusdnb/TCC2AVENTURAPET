const express = require('express');
const homeRouter = express.Router();
const homeController = require('../controller/homeController');

homeRouter.get('/', function(req, res){
    homeController.index(req, res);
});

homeRouter.get('/login', function(req, res){
    res.send('teste');
})

module.exports = homeRouter;