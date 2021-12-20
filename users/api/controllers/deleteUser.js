const db = require('../utils/postgres');

/* DELETE User  */
module.exports = async (req, res) => {
  try {
    const user = await db.query(
      `SELECT * FROM users WHERE id = '${req.params.id}'`,
    );

    if (user.rows.length === 1) {
      //TODO: rajouter une condition sur l'id du token = id en paramètre OR Role = true (admin)
      const { rows } = await db.query(
        `DELETE FROM users WHERE id = '${req.params.id}'`,
      );

      res.status(204).json({
        status: 'Success',
        message: 'User Deleted',
      });
    } else {
      res.status(404).json({
        status: 'Error',
        message: 'User not found',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 'Server Internal Error',
      message: error,
    });
  }
};
