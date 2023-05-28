const cloudinary = require("../Utils/cloudinary");
const Dog = require("../models/dogs");
const mongoose = require("mongoose");
const fs = require("fs");
require("dotenv").config();

// ***     USING MULTER FOR LOCAL STORAGE AND CLOUD UPLOAD     *** //

const createDog = async (req, res) => {
    const { name, age, weight, address,gender,neutered,breed,vaccinated,tickelSpot } = req.body;
    try {
        console.log("Hi from the createDog request");
        const result = await cloudinary.uploader.upload(req.file.path);
        const dog = await Dog.create({
            name,
            age,
            weight,
            address,
            gender,
            neutered,
            breed,
            vaccinated,
            tickelSpot,
            image: result.secure_url,
            public_id: result.public_id,
        });
        let imagePath = req.file.path;
        if (imagePath != null) {
            fs.unlink(imagePath, function (err) {
                if (err) {
                    throw err;
                } else {
                    console.log("File Deleted Successfully");
                }
            });
        }
        res.status(200).json(dog);
    } catch (error) {
        res.status(504).json({ error: error.message });
    }
};

const deleteDog = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Id invalid" });
        }
        const dog = await Dog.findOneAndDelete({ _id: id });

        cloudinary.uploader.destroy(dog.public_id, (error, result) => {
            if (error) {
                console.error(error);
                
            } else {
                console.log(result);
                // Image deleted successfully
            }
        });
        const dogImageInCloud = await Dog.findById(id);

        console.log(dogImageInCloud.image);

        if (!dog) {
            return res.status(400).json({ error: "No such dog exists" });
        }
        res.status(200).json(dog);
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({ error: "Invalid ID format" });
        } else if (error.name === "MongoError") {
            return res.status(500).json({ error: "Database error" });
        } else {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
};
const updateDog = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: "Id invalid" });
        }
        const dog = await Dog.findOneAndUpdate(
            { _id: id },
            {
                ...req.body,
            }
        );
        if (!dog) {
            return res.status(400).json({ error: "No such dog exists" });
        }
        res.status(200).json(dog);
    } catch (error) {
        res.status(504).json({ error: error });
    }
};
const getDogs = async (req, res) => {
    const dogs = await Dog.find({}).sort({ createdAt: -1 });
    res.status(200).json(dogs);
};

const getDog = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ error: "No such Dog exists in database" });
    }
    const dog = await Dog.findById(id);

    if (!dog) {
        return res.status(404).json({ error: "dog doesn't exist" });
    }
    res.status(200).json(dog);
};

module.exports = {
    getDogs,
    createDog,
    getDog,
    deleteDog,
    updateDog,
};
