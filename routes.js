// app.use('/grocery', express.static('../grocery'));

const express = require('express');
const app = express();
const router = app.listen(process.env.PORT || 3050, function () {
  console.log("Listening on port");
});


// router.use('/', express.static('./index'));


// router.get('/mylist', function (request, response) {
//   response.json(groceries);
// });


// module.exports(router)
