const db = require('../utils/postgres');

/* GET ALL users  */
module.exports = async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    rows.length !== 0
      ? res.status(200).json({
          status: 'Success',
          users: rows,
        })
      : res.status(404).json({
          status: 'Error',
          message: 'Users not found',
        });
  } catch (error) {
    res.status(500).json({
      status: 'Server Internal Error',
      message: error,
    });
  }
};
