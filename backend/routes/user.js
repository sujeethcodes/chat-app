const express = require("express")
const routes = express.Router()
const userController = require("../controller/user")

routes.post("/createUser", userController.createUser)
routes.put("/editUser", userController.editUser)
routes.post("/login", userController.login)
routes.post("/logout", userController.logOut)

module.exports = routes