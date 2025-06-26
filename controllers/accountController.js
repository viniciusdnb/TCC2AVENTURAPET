module.exports = {
    index: function(req, res, errorsValidator = null){
        res.render('views/account/index', {pathName:"main"});
    },
    newAccount: async function(req, res)
    { 
       const userModel = require('../model/models/usersModel');
       const users = await userModel.findAll();
       console.log('all users:', JSON.stringify(users,null, 2));
    }
    
}