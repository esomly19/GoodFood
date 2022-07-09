const axios = require('axios');
const Joi = require('joi');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  let {username,email,password,confirm_password}=req.body;
  console.log(req.body)
  let validated=schema.validate({username:username,email:email,password:password,confirm_password:confirm_password});
  if(validated.error)
    return res.status(406).json(validated.error.details);

  if(password!==confirm_password)
    return res.sendStatus(406);

  let salt = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password, salt);


  try{
    await axios.post(process.env.URL_USER+'/',{username:username,email:email,password:password})
  }
  catch(e){
    return res.sendStatus(403);
  }

  res.sendStatus(200)
}

const schema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string().min(8).max(50).required(),

  confirm_password: Joi.ref('password'),

  email: Joi.string().email().required()
})

module.exports = {register}
