const {checkSchema} = require('express-validator');
const loginValidator = checkSchema({
    userName:{
        errorMessage:"nome de usuario invalido, tente novamente",
        notEmpty: true,
        escape: true,
        isLength:{
            options:{
                max:50,
                min:4
            }
        }    
        
    },
    userPassword:{
        errorMessage:"senha digitada invalido, tente novamente",
        notEmpty: true,
        escape: true,
        isLength:{
            options:{
                min:4
            }
        }
    }
});

module.exports = loginValidator;