/* ..................................................................
 * .                                                                .
 * .     BUG HUNTER - Coding Dojo Student Resource/Learning App     .
 * .                                                                .
 * .                        Prescott Breeden                        .
 * .                                                                .
 * ..................................................................
*/

const express = require('express');
const app = express();
const bp = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');

const path = require('path');
const PORT = 8080;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(jwt());

app.use(express.static( __dirname + '/public/dist/public' ));
app.use('/users', require('./users/users.controller'));
app.use(errorHandler);

app.all("*", (req, res) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(PORT, ()=> {
  console.log("Listening on port " + PORT);
});
