const JWT = require('jsonwebtoken');
const axios = require('axios');
require('dotenv').config();

module.exports = async (req, res) => {
  const { email, password, firstname, lastname, phone, address } = req.body;
  //Verifying if the email is already taken
  try {
    const maybeUser = await axios.post(`http://users-api:3001/users/email`, {
      email,
    });

    res.status(401).send('Email already used');
  } catch (error) {
    if (error.response.status === 404) {
      const newUser = {
        email,
        password,
        firstname,
        lastname,
        phone,
        address,
      };

      const signup = await axios.post(`http://users-api:3001/users`, newUser);

      // Send JSON WEB TOKEN
      const token = await JWT.sign(
        {
          user_id: signup.data.id,
          user_email: signup.data.email,
          user_role: signup.data.role,
        },
        process.env.TOKEN_KEY,
        {
          expiresIn: 360000,
        },
      );

      signup.status === 201
        ? res.status(201).send({
            status: 'Success',
            message: 'User signed up',
            token,
          })
        : res.status(500).send('Server Internal Error');
    }
  }
};
