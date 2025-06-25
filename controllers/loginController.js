module.exports = {
    index: function(req, res, errorsValidator = null){
       
        res.render('views/login/index', {pathName:'main', errorsValidator});
    }
}