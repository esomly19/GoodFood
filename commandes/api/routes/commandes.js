const express = require('express');
const {getAllCommandesByRestaurant} = require("../controllers/getCommande");
const {getAllCommandesByUser} = require("../controllers/getCommande");
const {getAllCommandes} = require("../controllers/getCommande");
const {deleteCommande} = require("../controllers/deleteCommande");
const {createCommande} = require("../controllers/createCommande");

const router = express.Router();


//READ
router.get('/',getAllCommandes);
router.post('/user',getAllCommandesByUser);
router.post('/restaurant',getAllCommandesByRestaurant);

//CREATE
router.post('/',createCommande);

//DELETE
router.post('/delete', deleteCommande)

module.exports = router;
