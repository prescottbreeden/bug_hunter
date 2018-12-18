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
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json());

app.use(express.static( __dirname + '/public/dist/public' ));

const routes = require('./server/routes');
routes(app);

app.all("*", (req, res) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

const PORT = 8080;
app.listen(PORT, ()=> {
  console.log("Listening on port " + PORT);
});
