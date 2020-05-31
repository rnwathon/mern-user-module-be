const userServices = require("../services/user")
const jwtSignPayload = require('../helpers/jwtSignPayload')

exports.createUser = (req, res, next) => {
  const { fullname, email, password } = req.body;

  userServices.createUser(fullname, email, password)
  .then(result => {
    res
    .status(200)
    .json({
      success: true,
      message: "User Created",
      result
    })
  })
  .catch(err => {
    res
    .status(err.statusCode || 500)
    .json({
      success: false,
      message: err.message,
      result: null
    })
  })
}

exports.updateUser = (req, res, next) => {
  const { _id } = req.decoded;
  const { fullname } = req.body;

  userServices.updateUser(_id, fullname)
  .then(result => {
    res
    .status(200)
    .json({
      success: true,
      message: "User updated!",
      result: result
    })
  })
  .catch(err => {
    res
    .status(err.statusCode || 500)
    .json({
      success: false,
      message: err.message,
      result: null
    })
  })
}

exports.getUsers = (req, res, next) => {
  userServices.getUsers()
  .then(result => {
    res
    .status(200)
    .json({
      success: true,
      message: "Get users success!",
      result
    })
  })
  .catch(err => {
    res
    .status(err.statusCode || 500)
    .json({
      success: false,
      message: err.message,
      result: null
    })
  })
}

exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;

  userServices.getUserByQuery({email})
  .then(result => {
    if(!result){
      res
      .status(400)
      .json({
        success: false,
        message: "There is no account associated with the email!",
        result: null
      })  
    }

    if(result.password !== password){
      res
      .status(400)
      .json({
        success: false,
        message: "Wrong Password!",
        result: null
      }) 
    }

    const user = result;
    const payload = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email
    }

    jwtSignPayload(payload, process.env.JWT_KEY)
    .then(token => {
      res
      .status(200)
      .json({
        success: true,
        message: "Login success!",
        result: payload,
        token
      })
    })
    .catch(err => {
      res
      .status(err.statusCode || 500)
      .json({
        success: false,
        message: err.message,
        result: null
      })
    })
  })
  .catch(err => {
    res
    .status(err.statusCode || 500)
    .json({
      success: false,
      message: err.message,
      result: null
    })
  })
}