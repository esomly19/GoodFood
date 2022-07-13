const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const deleteCommande = async (req,res)=>{
    const { id }=req.body;

    if(!id)return res.sendStatus(403);
    try{
        await prisma.commande.delete({
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
module.exports= {deleteCommande};
