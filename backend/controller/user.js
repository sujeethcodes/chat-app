const User = require("../model/user")
const bcrypt = require("bcrypt")
const controller = {}
controller.createUser = async(req, res) => {

    if(!req?.body) return res.json({status:406, message:"values required"})

    const data =  req?.body
    data.password = bcrypt.hashSync(req?.body?.password, 10)
  
    const createUser = await User.create(data)
    
    if(!createUser) return res.json({status:406, message:"user create failed"})
        return res.json({status:200, message:"user created success"})
}

controller.editUser = (req, res) => {
    res.json("working")
}
controller.login = (req, res) => {
    res.json("working")
}
controller.logOut = (req, res) => {
    res.json("working")
}
module.exports =  controller