const express = require("express")
const app = express()
const port = 3000

const spring = require("./routes/spring")
const summer = require("./routes/summer")
const fall = require("./routes/fall")
const winter = require("./routes/winter")

app.use("/spring", spring)
app.use("/summer", summer)
app.use("/fall", fall)
app.use("/winter", winter)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})