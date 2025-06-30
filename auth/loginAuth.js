const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userModel = require('../model/models/usersModel');
const passwordHashModel = require('../model/models/password_hashModel');
const crypto = require('crypto');

passport.use(new LocalStrategy(
    function veryfy(emailUser, password, done){
        let user = userModel.findAll({where:{
            email:emailUser
        }});

        if(user.length == 0){
            return done(null, false, {message: 'usuario nao encontrado'});
        }

        let id_user = user.id;
        let password_hash = passwordHashModel.findAll({
            where:{
                id: id_user
            }
        });

        crypto.pbkdf2(passport, 'salt', '100000', '64', 'sha256', function(err, hashedPassword){
            if(err){done(err)};
            if(!crypto.timingSafeEqual(password_hash, hashedPassword)){
                return done(null, false, {message:'Usuario ou senha incorreta tente novamente'});
            }

            return done(null, user);
        });

    }
));

module.exports = passport;

