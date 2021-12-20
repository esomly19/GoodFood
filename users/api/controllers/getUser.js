const db = require('../utils/postgres');

/* GET ONE user  */
module.exports = async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM users WHERE id = '${req.params.id}'`,
    );

    rows.length !== 0
      ? res.status(200).json({
          status: 'Success',
          user: rows[0],
        })
      : res.status(404).json({
          status: 'Error',
          message: 'User not found',
        });
  } catch (error) {
    res.status(500).json({
      status: 'Server Internal Error',
      message: error,
    });
  }
};
