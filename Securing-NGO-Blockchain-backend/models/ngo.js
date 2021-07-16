const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ngoSchema = Schema({
    ngo_name:{
        type:String,
        required: true
    },
    founder:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    vision:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Ngo',ngoSchema);