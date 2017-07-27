// const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();
const knex = require('../groceryProject_SERVER/db/knex.js');
// const route = app('/.routes.js');
const port = process.env.PORT || 3050;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  knex('grocery')
    .then(function (groceries) {
      res.json(groceries);
    });
});


// knex('grocery').select('*').then(function(groceries) {
//   console.log(groceries);
// });

app.listen(port, function () {
  console.log("Listening on " + port);
});
