const express = require("express")
const router = express.Router()

const summer = require("../data/summer")

router
    .route("/")
    .get((req, res) => {
        res.json(summer)
    })

router
    .route("/:regrowBoolean")
    .get((req, res) => {
        const boolean = summer.filter(function(crop){
            return crop.regrowBoolean === req.params.regrowBoolean
    })
        res.json(boolean)
    })

module.exports = router