const express = require("express")
const router = express.Router()
const userController = require("../controllers/user")

// Get Users
router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.post('/login', userController.loginUser)

module.exports = router;