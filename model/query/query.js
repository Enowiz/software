const Sequelize = require('sequelize');
const conn = require('../../util/database/db_connect');

const Query = conn.define('query' , {
    query_id : {
        type : Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey :true,
        allowNull : false,
    },
    read:{
        type: Sequelize.ENUM,
        values: ['1', '0'],
        defaultValue: '0'
    },
    email: {
        type : Sequelize.STRING,
        allowedNull:true,
        unique : true
    },
    title: {
        type: Sequelize.STRING,
        allowedNull: false,
    },
    body: {
        type: Sequelize.STRING,
        allowedNull: false
    },
}, {timestamps : true}, {underscored: true});

module.exports = Query;