const {DataTypes} = require('sequelize');
const sequelize = require('../core/connect');

const Users = sequelize.define(
    'users',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING,            
        },
        password_hash:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING
        }
    },
    {
        timestamps:false
    }
);

module.exports = Users;