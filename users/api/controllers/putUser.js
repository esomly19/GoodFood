const db = require('../utils/postgres');
const bcrypt = require('bcrypt');

/* Update User  */
module.exports = async (req, res) => {
  const { email, password, firstname, lastname, phone, address } = req.body;

  // Confirms the form data is valid
  try {
    const newUser = await schema.validateAsync(req.body);
  } catch (err) {}

  try {
    const upLastName = lastname.toUpperCase();
    //TODO: rajouter une condition sur l'id du token = id en parametre OR Role = true (admin)
    const salt = await bcrypt.genSalt(10);
    const saltedPwd = await bcrypt.hash(password, salt);
    const { rows } = await db.query(
      `UPDATE users SET
      email = $1, password = $2, firstname = $3, lastname = $4, phone = $5,
      address = $6 WHERE idUser = $7 RETURNING *`,
      [email, saltedPwd, firstname, upLastName, phone, address, req.params.id],
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
