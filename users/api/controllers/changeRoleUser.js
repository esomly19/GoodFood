const db = require('../utils/postgres');

/* Update User  */
module.exports = async (req, res) => {
  try {
    //TODO: rajouter une condition sur Role dans le JWT = true (admin)

    if (req.params.role === 'admin') {
      const { rows } = await db.query(
        `UPDATE users SET role=true WHERE id=${req.params.id} RETURNING *`,
      );

      res.status(201).json({
        status: 'Success',
        message: "User's Role Updated",
        user: rows[0],
      });
    } else {
      if (req.params.role === 'client') {
        const { rows } = await db.query(
          `UPDATE users SET role=false id=${req.params.id}  RETURNING *`,
        );

        res.status(201).json({
          status: 'Success',
          message: "User's Role Updated",
          user: rows[0],
        });
      } else {
        res.status(403).json({
          status: 'Error',
          message: "You have to specify 'admin' or 'client' role",
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 'Server Internal Error',
      message: error,
    });
  }
};
