const {DataTypes} = require('sequelize');
const sequelize = require('../core/connect');

const Users = sequelize.define(
    'Users',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
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