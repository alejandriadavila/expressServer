const express = require("express")
const app = express()
const port = 3000

const fs = require("fs")
app.set("view engine", "ejs")

const spring = require("./routes/spring")
const summer = require("./routes/summer")
const fall = require("./routes/fall")
const winter = require("./routes/winter")
const cropPlanner = require("./routes/cropPlanner")
const error = require("./error")


// app.engine()

app.use("/spring", spring)
app.use("/summer", summer)
app.use("/fall", fall)
app.use("/winter", winter)
app.use("/cropPlanner", cropPlanner)

app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({error: err.message})
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})