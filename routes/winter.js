const express = require("express")
const router = express.Router()

const winter = require("../data/winter")

router
    .route("/")
    .get((req, res) => {
        res.json(winter)
    })

router
    .route("/:regrowBoolean")
    .get((req, res) => {
        const boolean = winter.filter(function(crop){
            return crop.regrowBoolean === req.params.regrowBoolean
    })
        res.json(boolean)
    })
    
module.exports = router