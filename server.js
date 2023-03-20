const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = 8000;
app.use( cors({ credentials: true, origin: 'http://localhost3000/' }) );
app.use( cookieParser() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require('dotenv').config();
require("./server/config/mongoose.config")
require("./server/routes/newProject.route")(app)

app.listen( port, () => console.log(Listening on port: ${ port }) );