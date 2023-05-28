const express = require('express')
const router = express.Router();
const {getDogs,createDog, getDog, deleteDog, updateDog, uploadImageTwo } = require("../controllers/dogsControllers")
const cloudinary = require("../Utils/cloudinary")
const multer = require("multer")
const path = require("path");

const storageEngine = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`);
    },
});

const upload = multer({
    storage: storageEngine,
    // limits:{fileSize:1000000},
    fileFilter:(req,file,cb) => {
        checkFileType(file,cb)
    }
});
//  Validating file type

const checkFileType = function (file, cb) {
    //Allowed file extensions
    const fileTypes = /jpeg|jpg|png|gif|svg/; //check extension names

    const extName = fileTypes.test(
        path.extname(file.originalname).toLowerCase()
    );

    const mimeType = fileTypes.test(file.mimetype);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb("Error: You can Only Upload Images!!");
    }
};


router.get("",getDogs)
router.get("/:id",getDog)
router.post("/",upload.single('image'),createDog)
router.put("/:id",updateDog)
router.delete("/:id",deleteDog)

module.exports=router;