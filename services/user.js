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

exports.getUserByQuery = (searchQuery) => {
  return new Promise((resolve, reject) => {
    userModel
    .findOne(searchQuery)
    .then(result => resolve(result))
    .catch(err => reject(err))
  })
}

exports.updateUser = (id, fullname) => {
  return new Promise((resolve, reject) => {
    userModel
    .findOneAndUpdate({ _id: id}, {fullname: fullname})
    .then(result => resolve(result))
    .catch(err => reject(err))
  })
}

exports.deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    userModel
    .findOneAndDelete({_id: id})
    .then(result => resolve(result))
    .catch(err => reject(err))
  })
}