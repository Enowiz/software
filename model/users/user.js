const Sequelize = require('sequelize');
const conn = require('../../util/database/db_connect');

const User = conn.define('user' , {
    user_id : {
        type : Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey :true,
        allowNull : false,
    },
    name : {
        type : Sequelize.STRING,
        allowNull: false
    },
    phone : {
        type : Sequelize.BIGINT,
        allowNull:false,
        unique : true
    },
    email : {
        type : Sequelize.STRING,
        unique : true
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false,
    },
    status : {
        type : Sequelize.ENUM,
        values  : ['0' , '1'],
        allowNull : false,
        defaultValue : '0'
    },
    role : {
        type : Sequelize.ENUM,
        values : ['admin' , 'user'],
        allowNull : false
    },
    quote: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
    }
} , {timestamps : true}, {underscored: true});

module.exports = User;