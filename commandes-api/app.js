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

const commandesRoute = require('./routes/commandes');

app.use("/", commandesRoute);

app.listen(process.env.PORT||3000,()=>{
  console.log("Commandes API launched!"+process.env.PORT)
})
module.exports = app;
