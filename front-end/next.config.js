require("dotenv").config();
let dev = process.env.ENV === "development";
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
  env:{
    USERS_API:dev?'http://localhost:3001':process.env.USERS_API,
    AUTH_API:dev?'http://localhost:3002':process.env.AUTH_API,
    RESTAURANTS_API:dev?'http://localhost:3003':process.env.RESTAURANTS_API,
    PLATS_API:dev?'http://localhost:3004':process.env.PLATS_API,
    COMMANDES_API:dev?'http://localhost:3005':process.env.COMMANDES_API,
  },
  async rewrites() {
    return [
      {
        source: '/api/commandes/:path*',
        destination: (dev?'http://localhost:3005':process.env.COMMANDES_API)+"/:path*",
      },
      {
        source: '/api/auth/:path*',
        destination: (dev?'http://localhost:3002':process.env.AUTH_API)+"/:path*",
      },
    ]
  },
})
