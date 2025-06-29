const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../core/connect');

const Password_hash = sequelize.define(
    'Password_hash',
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        hash:{
            type: DataTypes.STRING,
            allowNull:false
        },
        id_user:{
            type: DataTypes.INTEGER,
            allowNull:false
        }
    },
    {
        timestamps:false,
        //trava o nome da tabela para o sequelize nao trabalhar com plural no nome da tabela
        freezeTableName: true
    }
)

module.exports = Password_hash;