const express = require('express')
const router = express.Router();
const {getDogs,createDog, getDog, deleteDog, updateDog} = require("../controllers/dogsControllers")

router.get("",getDogs)
router.get("/:id",getDog)
router.post("",createDog)
router.put("/:id",updateDog)
router.delete("/:id",deleteDog)



module.exports=router;