const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCommande = async (req,res)=>{
    const {id_restaurant,id_client,prix,horraire,plats,etat}=req.body;
    console.log(req.body)
    if(!id_restaurant||!id_client||!prix||!horraire)return res.sendStatus(403);
    await prisma.commande.create({
        data: {
            id_restaurant,id_client,prix,horraire,plats,etat
        },
    })
    res.sendStatus(200);
}
module.exports= {createCommande};
