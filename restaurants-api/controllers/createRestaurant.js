const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createRestaurant = async (req,res)=>{
    const {ville, pays, adresse,tel,lat,lng}=req.body;

    if(!ville||!pays||!adresse||!tel)return res.sendStatus(403);
    await prisma.restaurant.create({
        data: {
            ville,pays,adresse,tel,lat,lng
        },
    })
    res.sendStatus(200);
}
module.exports= {createRestaurant};
