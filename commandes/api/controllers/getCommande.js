const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCommandes = async (req,res) => {
  const commandes = await allCommandes();
  res.status(200).send(commandes);
}


const getAllCommandesByRestaurant = async (req,res) => {
  const {restaurant_id} = req.body;
  if(!restaurant_id)res.sendStatus(403)
  const commandes = await allCommandesByRestaurant(restaurant_id);
  res.status(200).send(commandes);
}
const getAllCommandesByUser = async (req,res) => {
  const {client_id} = req.body;
  if(!client_id)res.sendStatus(403)
  const commandes = await allCommandesByUser(client_id);
  res.status(200).send(commandes);
}

const allCommandes = async () => {
  return await prisma.commande.findMany();
}

const allCommandesByRestaurant = async (restaurant_id) => {
  return await prisma.commande.findMany({
    where:{
      restaurant_id
    }
  });
}

const allCommandesByUser= async (client_id) => {
  return await prisma.commande.findMany({
    where: {
      client_id
    }
  });
}

module.exports = {getAllCommandes, getAllCommandesByRestaurant,getAllCommandesByUser}
