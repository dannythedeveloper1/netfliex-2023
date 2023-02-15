require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
// const routes = require('./server/routes')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(require('./server/routes'));
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
