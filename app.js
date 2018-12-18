/* ..................................................................
 * .                                                                .
 * .     BUG HUNTER - Coding Dojo Student Resource/Learning App     .
 * .                                                                .
 * .             Prescott Breeden & Bryanna Awesome                 .
 * .                                                                .
 * ..................................................................
*/

const express = require('express');
const app = express();
const bp = require('body-parser');
const routes = require('./server/routes');
const path = require('path');
const PORT = 8080;

app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public' ));
routes(app);
app.all("*", (req, res) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(PORT, ()=> {
  console.log("Listening on port " + PORT);
});
