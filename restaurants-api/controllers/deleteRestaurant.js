const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteRestaurant = async (req,res)=>{
    const { id }=req.body;

    if(!id)return res.sendStatus(403);
    try{
        await prisma.restaurant.delete({
            where: {
                id
            },
        })
    }
    catch (e){
        return res.sendStatus(208);
    }

    res.sendStatus(200);
}
module.exports= {deleteRestaurant};
