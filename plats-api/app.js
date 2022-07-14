const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(cookieParser());

let bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const platsRoute = require('./routes/plats');

app.use("/", platsRoute);

app.listen(process.env.PORT||3000,()=>{
  console.log("Plats API launched!"+process.env.PORT)
})
