const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js');
const dbConfig = config[environment];
var knex = require('knex');

module.exports = knex(dbConfig);
