const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllRestaurants = async (req,res) => {
  const restaurants = await allRestaurants();
  res.status(200).send(restaurants);
}
const getRestaurantById = async (req,res) => {
  let {id}=req.body;
  if(!id) return res.sendStatus(403);
  let restaurant = await restaurantById(id);
  res.status(200).send(restaurant);
}

const getAllRestaurantsByVille = async (req,res) => {
  let {ville}=req.body;
  if(!ville) return res.sendStatus(403);
  const restaurants = await restaurantByVille(ville);
  res.status(200).send(restaurants);
}


const restaurantById = async (id)=>{
  return await prisma.restaurant.findUnique({
    where: {
      id
    },
  })
}

const restaurantByVille = async (ville)=>{
  return await prisma.restaurant.findMany({
    where: {
      ville
    },
  })
}

const allRestaurants = async () => {
  return await prisma.restaurant.findMany();
}
module.exports = {getAllRestaurants,getRestaurantById,getAllRestaurantsByVille}
