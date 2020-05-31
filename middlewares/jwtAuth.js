const jwt = require('jsonwebtoken');

const jwtAuthentication = (req, res, next) => {
  let token = req.headers.authorization;
  if(!token) res.status(400).json({success: false, message: "Authorization is required!"})

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if(err) res.status(400).json({success: false, message: "Token is invalid!"})
    req.decoded = decoded;
    req.checkAuth = true;
    next()
  })
}

module.exports = jwtAuthentication;