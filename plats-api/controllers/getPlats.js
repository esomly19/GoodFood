const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllPlats = async (req,res) => {
  const plats = await allPlats();
  res.status(200).send(plats);
}

const getAllPlatsGenerique = async (req,res) => {
  const platsGenerique = await allPlatsByRestaurant();
  res.status(200).send(platsGenerique);
}

const getAllPlatsByRestaurant = async (req,res) => {
  const {restaurant_id} = req.body;
  if(!restaurant_id)res.sendStatus(403)
  const plats = await allPlatsGenerique();
  const platsGenerique = await allPlatsByRestaurant(restaurant_id);
  res.status(200).send([...plats,...platsGenerique]);
}

const allPlats = async () => {
  return await prisma.plat.findMany();
}

const allPlatsByRestaurant = async (restaurant_id) => {
  return await prisma.plat.findMany({
    where:{
      restaurant_id
    }
  });
}

const allPlatsGenerique = async () => {
  return await prisma.plat.findMany({
    where:{
      restaurant_id:null
    }
  });
}
module.exports = {getAllPlats, getAllPlatsByRestaurant, getAllPlatsGenerique}
