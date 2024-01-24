const express = require("express")
const router = express.Router()

const fall = require("../data/fall")

router
    .route("/")
    .get((req, res) => {
        res.json(fall)
    })

module.exports = router