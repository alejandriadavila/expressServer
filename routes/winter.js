const express = require("express")
const router = express.Router()

const winter = require("../data/winter")

router
    .route("/")
    .get((req, res) => {
        res.json(winter)
    })

module.exports = router