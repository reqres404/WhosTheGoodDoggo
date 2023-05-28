const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dogSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    weight:{
        type:Number,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    neutered:{
        type:String,
        require:true
    },
    breed:{
        type:String,
        require:true
    },
    vaccinated:{
        type:String,
        require:true
    },
    tickelSpot:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    public_id:{
        type:String,
        require:true
    }

},{timestamps:true})

module.exports = mongoose.model('Dog',dogSchema)