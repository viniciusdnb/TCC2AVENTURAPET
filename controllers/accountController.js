module.exports = {
    index: function(req, res, errorsValidator = null){
        res.render('views/account/index', {pathName:"main"});
    },
    newAccount: function(req, res){
        
    }
    
}