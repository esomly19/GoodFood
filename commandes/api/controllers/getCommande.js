const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCommandes = async (req,res) => {
  const commandes = await allCommandes();
  res.status(200).send(commandes);
}


const getAllCommandesByRestaurant = async (req,res) => {
  const {id_restaurant} = req.body;
  if(!id_restaurant)return res.sendStatus(403)
  const commandes = await allCommandesByRestaurant(id_restaurant);
  res.status(200).send(commandes);
}
const getAllCommandesByUser = async (req,res) => {
  const {id_client} = req.body;
  if(!id_client)res.sendStatus(403)
  const commandes = await allCommandesByUser(id_client);
  res.status(200).send(commandes);
}

const allCommandes = async () => {
  return await prisma.commande.findMany();
}

const allCommandesByRestaurant = async (id_restaurant) => {
  return await prisma.commande.findMany({
    where:{
      id_restaurant
    }
  });
}

const allCommandesByUser= async (id_client) => {
  return await prisma.commande.findMany({
    where: {
      id_client
    }
  });
}

module.exports = {getAllCommandes, getAllCommandesByRestaurant,getAllCommandesByUser}
