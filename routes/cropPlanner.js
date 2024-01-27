const express = require("express")
const router = express.Router()

const cropPlanner = require("../data/cropPlanner")
const error = require("../error")

router
    .route("/")
    .get((req, res) => {
        // res.json(cropPlanner)
        res.render('cropPlanner')
    })
    .post((req, res, next) => {
        if (req.body.id && req.body.name && req.body.type && req.body.seedName && req.body.seedCost && req.body.growthTime && req.body.regrowBoolean && req.body.regrowTime && req.body.imgUrl){
            const crop = {
                id: req.body.id,
                name: req.body.name,
                type: req.body.type,
                seedName: req.body.seedName,
                seedCost: req.body.seedCost,
                growthTime: req.body.growthTime,
                regrowBoolean: req.body.regrowBoolean,
                regrowTime: req.body.regrowTime,
                imgUrl: req.body.imgUrl
            }
            cropPlanner.push(crop)
            res.send("Crop added to Crop Planner")
        }else next(error(400, "Insufficient Data"))
    })

router
    .route("/:id")
    .get((req, res) =>{
        const crop = cropPlanner.find((c) => c.id == req.params.id)
        if (crop) res.json(crop)
    })
    .patch((req, res) => {
        const crop = cropPlanner.find((c, i) => {
          if (c.id == req.params.id) {
            for (const key in req.body) {
              cropPlanner[i][key] = req.body[key]
            }
            return true
          }
        })
        if (crop) res.json(crop)
      })
    .delete((req, res) => {
        const crop = cropPlanner.find((c, i) =>{
            if(c.id == req.params.id){
                cropPlanner.splice(i, 1)
                return true
            }
        })
        if (crop) res.json(crop)
    })

module.exports = router