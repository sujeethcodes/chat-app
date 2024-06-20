const express = require("express")
const routes = express.Router();
const userController = require("../controller/user")
routes.post("/createUser", userController.createUser)
module.exports = routes