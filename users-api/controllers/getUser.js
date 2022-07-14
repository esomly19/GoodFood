const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserByEmail = async (req, res) => {
  const {email}=req.body;
  if(!email)return res.sendStatus(403);
  let user=await userByEmail(email);
  res.json(user)
}

const getUserById = async (req, res) => {
  const {id}=req.body;
  if(!id)return res.sendStatus(403);
  let user=await userById(id);
  res.json(user)
}


const userByEmail = async (email)=>{
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
}
const userById = async (id)=>{
  return await prisma.user.findUnique({
    where: {
      id
    },
  })
}
const getUserByUsername = async (req, res) => {
  const {username}=req.body;
  if(!username)return res.sendStatus(403);
  const user = await userByUsername(username);
  res.status(200).send(user);
}

const userByUsername = async (username)=>{
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
  })
}



const getAllUsers = async (req,res) => {
  const users = await allUsers();
  res.status(200).send(users);
}

const allUsers = async () => {
  return await prisma.user.findMany();
}
module.exports = {getUserByEmail,getAllUsers,getUserByUsername,userByUsername,userByEmail,allUsers,getUserById}
