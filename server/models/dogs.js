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
    address:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:false
    }

},{timestamps:true})

module.exports = mongoose.model('Dog',dogSchema)