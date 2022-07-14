const express = require('express');
const router = express.Router();

const {createPlat} = require("../controllers/createPlat");
const {getAllPlatsGenerique,getAllPlatsByRestaurant} = require("../controllers/getPlats");
const {deletePlat} = require("../controllers/deletePlat");

//READ
router.get('/',getAllPlatsGenerique);
router.post('/id',getAllPlatsByRestaurant);

//CREATE
router.post('/',createPlat);

//DELETE
router.post('/delete',deletePlat)

module.exports = router;
