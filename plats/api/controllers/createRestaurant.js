const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRestaurant = async (req,res)=>{
    const {ville, pays, adresse,tel}=req.body;

    if(!ville||!pays||!adresse||!tel)return res.sendStatus(403);
    await prisma.restaurant.create({
        data: {
            ville,pays,adresse,tel
        },
    })
    res.sendStatus(200);
}
module.exports= {createRestaurant};
