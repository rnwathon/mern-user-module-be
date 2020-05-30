const jwt = require('jsonwebtoken');

const jwtSignPayload = (payload, jwtKey) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, jwtKey, {}, (err, token) => {
      if(err) reject(err);
      resolve(token);
    })
  })
}

module.exports = jwtSignPayload;