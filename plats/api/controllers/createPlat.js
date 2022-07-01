const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPlat = async (req,res)=>{
    const {prix_ttc, list_ingredient, nom,restaurant_id,image}=req.body;

    if(!prix_ttc||!list_ingredient||!nom)return res.sendStatus(403);
    await prisma.plat.create({
        data: {
            prix_ttc,list_ingredient,nom,restaurant_id,image
        },
    })
    res.sendStatus(200);
}
module.exports= {createPlat};
