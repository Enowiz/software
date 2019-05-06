const Sequelize = require('sequelize');
const conn = require('../../util/database/db_connect');

const User = conn.define('contact' , {
  contact_id: {
    type : Sequelize.INTEGER,
    autoIncrement:true,
    primaryKey :true,
    allowNull : false,
  } ,
  email: {
    type : Sequelize.STRING,
    allowedNull:true,
    unique : true
  },
  phone: {
    type : Sequelize.BIGINT,
    allowNull:false,
    unique : true
  }
}, {timestamps : true}, {underscored: true});

module.exports = User;