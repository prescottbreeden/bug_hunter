const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json());

const routes = require('./server/routes');
routes(app);

const PORT = 8080;
app.listen(PORT, ()=> {
  console.log("Listening on port " + PORT);
});
