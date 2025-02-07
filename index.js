const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const route = require("./routes/client/index.route");

// Route
route(app);

// View pug
app.set('views', './views');
app.set('view engine', 'pug');

// Serving static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})