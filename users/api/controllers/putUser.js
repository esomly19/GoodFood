const db = require('../utils/postgres');
const bcrypt = require('bcryptjs');
const schema = require('../utils/joi');

/* Update User  */
module.exports = async (req, res) => {
  const { email, password, username, phone } = req.body;

  // Confirms the form data is valid
  try {
    const newUser = await schema.validateAsync(req.body);
  } catch (err) {}

  try {
    //TODO: rajouter une condition sur l'id du token = id en parametre OR Role = true (admin)
    const salt = await bcrypt.genSalt(10);
    const saltedPwd = await bcrypt.hash(password, salt);
    const { rows } = await db.query(
      `UPDATE users 
      SET email = $1, password = $2, username = $3, phone = $4, 
      WHERE idUser = $5 RETURNING *`,
      [email, saltedPwd, username, phone, req.params.id],
    );

    res.status(201).json({
      status: 'Success',
      message: 'User Updated',
      user: rows[0],
    });
  } catch (error) {
    res.status(500).json({
      status: 'Server Internal Error',
      message: error,
    });
  }
};
