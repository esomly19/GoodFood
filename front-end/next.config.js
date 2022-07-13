require("dotenv").config();
let dev = process.env.ENV==='development';
module.exports = {
  reactStrictMode: true,
  env:{
    USERS_API:dev?'http://localhost:3001':process.env.USERS_API,
    AUTH_API:dev?'http://localhost:3002':process.env.AUTH_API,
    RESTAURANTS_API:dev?'http://localhost:3003':process.env.RESTAURTS_API,
    PLATS_API:dev?'http://localhost:3004':process.env.PLATS_API,
    COMMANDES_API:dev?'http://localhost:3005':process.env.COMMANDES_API,
  }
}
