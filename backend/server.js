require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const Connection =  require("./config/db")


const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json({ limit: "3000mb" }));
app.use(bodyParser.urlencoded({ limit: "3000mb", extended: true }));

// ##### Data base Connection ####### //
Connection()

app.use("/api/user", require("./routes/user"))

app.listen(PORT, ()=>{
    console.log(`This Port is running in ${PORT}`)
})