const express = require('express');
const router = express.Router();

const {deleteRestaurant} = require("../controllers/deleteRestaurant");
const {createRestaurant} = require("../controllers/createRestaurant");
const { getAllRestaurants,getRestaurantById, getAllRestaurantsByVille } = require('../controllers/getRestaurant')

//READ
router.get('/',getAllRestaurants);
router.post('/id',getRestaurantById);
router.post("/ville",getAllRestaurantsByVille)

//CREATE
router.post('/',createRestaurant)

//DELETE
router.post('/delete',deleteRestaurant)




module.exports = router;
