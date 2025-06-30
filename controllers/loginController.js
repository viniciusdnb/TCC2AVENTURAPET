module.exports = {
    index: function(req, res, errorValidator = null){
       
        res.render('views/login/index', {pathName:'main', errorValidator});
    },
    
}