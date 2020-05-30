const userServices = require("../services/user")

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