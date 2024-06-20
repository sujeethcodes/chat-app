const express = require("express")
const Connection = require("./config/db")
const bodyParser = require("body-parser")
const app = express()
const PORT = 9000
Connection()
const userRoutes = require("./routes/user")
app.use(bodyParser.json({ limit: "3000mb" }));
app.use(bodyParser.urlencoded({ limit: "3000mb", extended: true }));
app.use("/api/user", userRoutes)
app.listen(PORT, ()=>{
    console.log(`This port is running in ${PORT}!`)
})