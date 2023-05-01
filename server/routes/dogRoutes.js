const express = require('express')
const router = express.Router();
const {getDogs,createDog, getDog, deleteDog, updateDog, uploadImage} = require("../controllers/dogsControllers")
const cloudinary = require("../Utils/cloudinary")
const upload = require("../Utils/multer")



router.get("",getDogs)
router.get("/:id",getDog)
router.post("",upload.single('image'),createDog)
router.put("/:id",updateDog)
router.delete("/:id",deleteDog)
router.post("/image/upload", upload.single('image'),uploadImage)


module.exports=router;