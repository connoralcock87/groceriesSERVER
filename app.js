// const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();
// const route = app('/.routes.js');


const knex = require('../groceryProject_SERVER/db/knex.js');

knex('grocery').select('*').then(function(groceries) {
  console.log(groceries);
});
