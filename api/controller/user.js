const User = require("../model/user")
const controller = {}
controller.createUser = async(req, res)=>{
    if(!req?.body) return res.json("values required")
    const createUser = await User.create(req?.body)
    if(!createUser) return res.json({status:406, message:"user creation failed"})
        return res.json({status:200, message:"success"})
}
module.exports = controller