//TODO:

module.exports = async (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'Logged out',
    token: token,
  });
};
