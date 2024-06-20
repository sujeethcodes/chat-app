require("dotenv").config()
const mongoose = require("mongoose")

const Connection = () => {
        mongoose.connect(process.env.MONGO).then(()=>{
            console.log("Mongo DB Connected Successfully")
        }).catch((err)=>{
            console.log(err.message)
        })
}
module.exports = Connection