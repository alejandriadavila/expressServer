const express = require("express")
const router = express.Router()

const spring = require("../data/spring")

router
    .route("/")
    .get((req, res) => {
        res.json(spring)
    })


module.exports = router