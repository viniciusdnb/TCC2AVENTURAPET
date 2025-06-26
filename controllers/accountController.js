module.exports = {
    index: function(req, res, errorsValidator = null){
        res.render('views/account/index', {pathName:"main"});
    },
    newAccount: async function(req, res){
        const sequelize = require('../models/core/connect');
        try{
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }catch(err){
            console.log('Unable to connect to the database:',err);
        }
    }
    
}