module.exports = {
    index: function (req, res, errorsValidator = null) {
        res.render('views/account/index', { pathName: "main" });
    },
    newAccount: async function (req, res) {
        //verifica se o nome e email ja existe na tabela de usuarios
        const userModel = require('../model/models/usersModel');
        const Password_hashModel = require('../model/models/password_hashModel');
        const crypto = require('crypto');


        let userName = req.body.userName;
        let userEmail = req.body.userEmail;
        let userPassword = req.body.userPassword;

        let where = {
            where: {
                email: userEmail
            }
        }

        const users = await userModel.findAll(where);
        
        //verifica se ja existe cadastro do usuario
        if (users.length !== 0) {
           return res.render('views/login/index', { pathName: "main", msg: "O seu Email ja esta cadastrado, caso nao lembre a senha click em esqueci a senha" });
        }

        //inseri o novo usuario na tabela
        const user = await userModel.create({
            name: userName,
            email: userEmail
        });

        //cria a criptografia da senha
        const createHash = crypto.createHash('sha256').update(userPassword).digest('hex');

        //inseri a senha do usuario na tabela
        const pass = await Password_hashModel.create({
            hash: createHash,
            id_user: user.id
        });
        

        console.log('all users:', JSON.stringify(users, null, 2));
        console.log(pass);
    }

}