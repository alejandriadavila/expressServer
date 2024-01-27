const express = require("express")
const router = express.Router()

const spring = require("../data/spring")

router
    .route("/")
    .get((req, res) => {
        res.json(spring)
    })

router
    .route("/:regrowBoolean")
    .get((req, res) => {
        const boolean = spring.filter(function(crop){
            return crop.regrowBoolean === req.params.regrowBoolean
    })
        res.json(boolean)
    })

module.exports = router