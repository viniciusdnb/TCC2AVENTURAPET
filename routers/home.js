const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', function(req, res){
    homeController.index(req, res);
});



module.exports = router;