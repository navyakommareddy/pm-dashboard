const config = require( './secrets.json' );
const Sequelize = require('sequelize');

const connection = new Sequelize(config.development.database,
    config.development.username,config.development.password,{
    host:config.development.host,
    dialect:config.development.dialect,
	operatorsAliases: false
});

module.exports = connection;