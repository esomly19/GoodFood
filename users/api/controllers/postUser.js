const db = require('../utils/postgres');
const { schema } = require('../utils/joi');

/* GET ALL users  */
module.exports = async (req, res) => {
  // Destructuring body request
  const { email, password, username, phone } = req.body;
  try {
    // Confirms the form data is valid
    const newUser = await schema.validateAsync(req.body);
  } catch (err) {}
  try {
    const { rows } = await db.query(
      `INSERT INTO users (email, password, username, phone) 
              VALUES ($1, $2, $3, $4) RETURNING *`,
      [email, password, username, phone],
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
