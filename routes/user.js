const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")
const jwtAuth = require("../middlewares/jwtAuth")

// Get Users
router.get('/', jwtAuth, userController.getUsers)
router.post('/', jwtAuth, userController.createUser)
router.put('/', jwtAuth, userController.updateUser)
router.delete('/', jwtAuth, userController.deleteUser)
router.post('/login', userController.loginUser)

module.exports = router;