const cloudinary = require("../Utils/cloudinary");
const Dog = require("../models/dogs");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

// ***  USING MULTER FOR DIRECT DATABASE STORAGE    *** //
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

const uploadImageTwo = async (req, res) => {
    if (req.file){
        console.log("file uploaded sucessfully")
        console.log("File uploaded successfully:");
        console.log("Filename: " + req.file.filename);
        console.log("Size: " + req.file.size);
        console.log("Mimetype: " + req.file.mimetype);
        console.log("Path: " + req.file.path);
        
        res.status(200).send("single file uploaded successfully")
        
    }
    else{
        res.status(400).send("please upload a valid image")
    }
};

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
// ***  USING MULTER FOR DIRECT DATABASE STORAGE    *** //

const createDog = async (req, res) => {
    const { name, age, weight, address, image } = req.body;
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const dog = await Dog.create({
            name,
            age,
            weight,
            address,
            image: result.secure_url,
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
            name: req.body.name,
            age: req.body.age,
            weight: req.body.weight,
            address: req.body.address,
            image: result.secure_url,
        });
        res.status(200).json(newDog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//upload Images directly to database

module.exports = {
    getDogs,
    createDog,
    getDog,
    deleteDog,
    updateDog,
    uploadImage,
    uploadImageTwo
};

const { MongoClient } = require('mongodb');
const { GridFSBucket } = require('mongodb');



//  *****   MONGODB DIRECT IMAGE UPLOAD CHATGPT     *****   //         
// // Connect to MongoDB
// const uri = 'mongodb://localhost:27017/mydatabase';
// const client = new MongoClient(uri, { useNewUrlParser: true });
// await client.connect();

// // Get a reference to the GridFS bucket
// const db = client.db();
// const bucket = new GridFSBucket(db);

// // Upload the image to GridFS
// const stream = fs.createReadStream('path/to/image.jpg');
// const uploadStream = bucket.openUploadStream('image.jpg');
// stream.pipe(uploadStream);

// // Wait for the upload to complete
// uploadStream.on('finish', () => {
//   console.log('Image uploaded to MongoDB');
//   client.close();
// });
// In this example, we first connect to the MongoDB server using the MongoClient class from the mongodb package. Then, we create a GridFSBucket instance from the database reference, which we can use to upload and retrieve files from the GridFS store.

// Next, we create a read stream from the image file and an upload stream from the GridFSBucket. We pipe the read stream to the upload stream to transfer the contents of the image file to the GridFS store.

// Finally, we wait for the upload to complete by listening to the finish event of the upload stream. When the upload is complete, we close the MongoDB client.

// Note that this is a basic example and you may need to customize it to suit your specific use case. For example, you may want to add error handling and validation code, or use a different naming convention for the uploaded files.

//  *****   MONGODB DIRECT IMAGE UPLOAD CHATGPT     *****   //         


//  *****   MYSQL DIRECT IMAGE UPLOAD CHATGPT     *****   //         

// To upload an image to MySQL, you can store the image as a binary large object (BLOB) in a table. Here's an example of how to insert an image file into a MySQL database table using the mysql package in Node.js:

// php

// const fs = require('fs');
// const mysql = require('mysql');

// // Create a MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'mydatabase'
// });

// // Connect to MySQL
// connection.connect();

// // Read the image file as a Buffer
// const imageBuffer = fs.readFileSync('path/to/image.jpg');

// // Insert the image into the MySQL database
// const query = 'INSERT INTO images (name, image) VALUES (?, ?)';
// const values = ['image.jpg', imageBuffer];
// connection.query(query, values, (error, results, fields) => {
//   if (error) throw error;
//   console.log('Image inserted into MySQL');
// });

// // Close the MySQL connection
// connection.end();

// In this example, we first create a connection to the MySQL server using the mysql package. Then, we read the image file as a buffer using the fs package.

// Next, we insert the image into a table named images in the MySQL database using a parameterized query. The first parameter in the values array is the filename of the image, and the second parameter is the image buffer. When the query is executed, the image buffer is converted to a BLOB and stored in the database.

// Finally, we close the MySQL connection. Note that this is a basic example and you may need to customize it to suit your specific use case. For example, you may want to add error handling, validation code, or use a different table structure.

//  *****   MYSQL DIRECT IMAGE UPLOAD CHATGPT     *****   //         
