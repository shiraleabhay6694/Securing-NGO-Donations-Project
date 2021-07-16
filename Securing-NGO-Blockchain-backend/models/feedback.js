const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    ngoAddress:{
        type:String,
        required:true
    },
    name:{
        type : String,
        required : true
    },
    comment:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('Feedback',feedbackSchema);
