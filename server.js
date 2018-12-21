/* ..................................................................
 * .                                                                .
 * .     BUG HUNTER - Coding Dojo Student Resource/Learning App     .
 * .                                                                .
 * .                        Prescott Breeden                        .
 * .                                                                .
 * ..................................................................
*/

const express = require('express');
const bp = require('body-parser');
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const session = require('express-session');
const favicon = require('serve-favicon');
const path = require('path');
const routes = require('./server/routes');
const PORT = 8080;

const app = express();

app.use(session({
  secret: 'rubberbabybuggybumpers',
  name: 'cookie_monster',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
// app.use(jwt());

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(errorHandler);
routes(app);

app.all("*", (req, res) => {
  res.sendFile(path.resolve('./public/dist/public/index.html'))
});

app.listen(PORT, ()=> {
  console.log('Listening on port ' + PORT);
});
