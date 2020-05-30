const userModel = require("../models/user")

exports.createUser = (fullname, email, password) => {
  return new Promise((resolve, reject) => {
    userModel.create({
      fullname,
      email,
      password
    })
    .then(result => resolve(result))
    .catch(err => reject(err))
  })
}

exports.getUsers = () => {
  return new Promise((resolve, reject) => {
    userModel
    .find()
    .then(result => resolve(result))
    .catch(err => reject(err))
  })
}