const { PrismaClient } = require('@prisma/client')
const { userByEmail, userByUsername } = require('./getUser');
const prisma = new PrismaClient()

const createUser = async (req,res)=>{
  const {username, password, email}=req.body;
  //Check les variables
  if(!username||!password||!email)return res.sendStatus(403);
  if(await userByEmail(email)||await userByUsername(username))return res.sendStatus(403);
  await prisma.user.create({
    data: {
      username: username,
      email: email,
      password: password
    },
  })
  res.sendStatus(200);
}

module.exports = {createUser};
