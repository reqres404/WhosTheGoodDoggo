const Dog = require('../models/dogs')
const mongoose = require('mongoose')

const createDog = async(req,res)=>{
    const {name,age,weight,address} = req.body
    try{
        const dog = await Dog.create({name,age,weight,address})
        res.status(200).json(dog)
    }
    catch(error){
        res.status(504).json({error:error.message})
    }
}
const deleteDog = async(req,res)=>{
    const {id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({msg:"Id invalid"})
        }
        const dog = await Dog.findOneAndDelete({_id:id})
        if(!dog){
            return res.status(400).send
        }
    } catch (error) {
        
    }
}

const getDogs = async(req,res)=>{
    const dogs = await Dog.find({}).sort({createdAt:-1})
    res.status(200).json(dogs)
}

module.exports={
    getDogs,
    createDog
}