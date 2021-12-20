const db = require('../utils/postgres');
const bcrypt = require('bcrypt');
const { schema } = require('../utils/joi');

/* GET ALL users  */
module.exports = async (req, res) => {
  // Destructuring body request
  const { email, password, firstname, lastname, phone, address } = req.body;
  try {
    // Confirms the form data is valid
    const newUser = await schema.validateAsync(req.body);
  } catch (err) {}
  try {
    //If it's a new user we salt his password before inserting it
    const salt = await bcrypt.genSalt(10);
    const saltedPwd = await bcrypt.hash(password, salt);

    const { rows } = await db.query(
      `INSERT INTO users (email, password, firstname, lastname, phone, address) 
              VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [email, saltedPwd, firstname, lastname, phone, address],
    );

    res.status(201).json({
      status: 'Success',
      message: 'User created',
      user: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server Internal Error',
      message: error,
    });
  }
};
