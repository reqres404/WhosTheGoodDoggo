const cloudinary = require("../Utils/cloudinary");
const Dog = require("../models/dogs");
const mongoose = require("mongoose");

const createDog = async (req, res) => {
    const { name, age, weight, address,image} = req.body;
    try {
        const result =await cloudinary.uploader.upload(req.file.path)
        const dog = await Dog.create({
            name,
            age,
            weight,
            address,
            image:result.secure_url
        });

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

//testing upload image
const uploadImage = async (req, res) => {
    try {
        let result = await cloudinary.uploader.upload(req.file.path);
        let newDog = new Dog({
            name:req.body.name,
            age:req.body.age,
            weight:req.body.weight,
            address:req.body.address,
            image:result.secure_url
        })
        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getDogs,
    createDog,
    getDog,
    deleteDog,
    updateDog,
    uploadImage,
};
