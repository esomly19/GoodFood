const jwt = require('jsonwebtoken');


const verify = async (req,res) =>{
    const { token } = req.body;
    let payload
    try {
      // Parse the JWT string and store the result in `payload`.
      // Note that we are passing the key in this method as well. This method will throw an error
      // if the token is invalid (if it has expired according to the expiry time we set on sign in),
      // or if the signature does not match
      payload = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
    } catch (e) {
      // otherwise, return a bad request error
      return res.status(400).send()
    }

    // Finally, return the welcome message to the user, along with their
    // username given in the token
    res.send(`Welcome ${payload.username}!`)

}

module.exports = {verify}