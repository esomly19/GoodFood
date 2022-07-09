const axios = require('axios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const {usernameEmail,password}=req.body;

  if(!usernameEmail||!password)
    return res.sendStatus(406);
  let user;
  try{
    user = await axios.post(process.env.URL_USER+'/email',{email:usernameEmail});
    if(!user.data) user = await axios.post(process.env.URL_USER+'/username',{username:usernameEmail});
    if(!user.data) return res.sendStatus(406);
  }
  catch(e){
    console.log(e)
    return res.sendStatus(403);
  }
  let logged = bcrypt.compareSync(password, user.data.password);
  if(!logged)
    return res.sendStatus(403);

  let token = jwt.sign({ id: user.data.id }, process.env.TOKEN_KEY);
  res.status(200).json({token:token});
}


module.exports = {login}
