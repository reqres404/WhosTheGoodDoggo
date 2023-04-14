const express = require('express')
const router = express.Router();
const {getDogs,createDog} = require("../controllers/dogsControllers")

router.get("/getDogs",getDogs)
router.post("/post",createDog)


module.exports=router;