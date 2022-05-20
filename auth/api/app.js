const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const authRoute = require('./routes/auth');

app.use("/",authRoute);

app.listen(process.env.PORT||3000,()=>{
  console.log("User API lauched!"+process.env.PORT)
})
