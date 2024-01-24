const express = require("express")
const router = express.Router()

const summer = require("../data/summer")

router
    .route("/")
    .get((req, res) => {
        res.json(summer)
    })

module.exports = router