const JWT = require('jsonwebtoken');
const axios = require('axios');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  // Check if user with email exists

  axios.get(`http://users-api:3001/users/email`, { email }).then((user) => {
    user.length === 0 &&
      res.status(403).json({
        status: 'Error',
        message: `User doesn't exist`,
      });

    // Check if the password is valid
    bcrypt.compare(password, user.password, async (err, same) => {
      if (same) {
        // Send JSON WEB TOKEN
        const token = await JWT.sign(
          { user_id: user.id, user_email: user.email, user_role: user.role },
          process.env.TOKEN_KEY,
          {
            expiresIn: 360000,
          },
        );

        res.status(200).json({
          status: 'Success',
          message: 'User connected',
          token,
        });
      }
    });
  });
};
