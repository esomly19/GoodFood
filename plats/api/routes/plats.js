const express = require('express');
const router = express.Router();


const {getAllPlatsGenerique,getAllPlatsByRestaurant} = require("../controllers/getPlats");

//READ
router.get('/',getAllPlatsGenerique);
router.post('/id',getAllPlatsByRestaurant);

module.exports = router;
