const {checkSchema} = require('express-validator');
const accountValidator = checkSchema({
    userName:{
        errorMessage:"nome de usuario invalido, tente novamente",
        notEmpty: true,
        escape: true,
        trim:true,
        isLength:{
            options:{
                max:50,
                min:4
            }
        }    
        
    },
    userEmail:{
        errorMessage:"email invalido, tente novamente",
        notEmpty:true,
        trim:true,
        escape:true,
        isEmail:true

    },
    userPassword:{
        errorMessage:"senha digitada invalido, tente novamente",
        notEmpty: true,
        escape: true,
        trim:true,
        isLength:{
            options:{
                min:4
            }
        }
    }
});

module.exports = accountValidator;