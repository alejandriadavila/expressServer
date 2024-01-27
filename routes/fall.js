const express = require("express")
const router = express.Router()

const fall = require("../data/fall")

router
    .route("/")
    .get((req, res) => {
        res.json(fall)
    })

router
    .route("/:regrowBoolean")
    .get((req, res) => {
        const boolean = fall.filter(function(crop){
            return crop.regrowBoolean === req.params.regrowBoolean
    })
        res.json(boolean)
    })

module.exports = router