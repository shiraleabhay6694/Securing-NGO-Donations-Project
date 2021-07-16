const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helpSchema = new Schema({
    ngoAddress:{
        type : String,
        required : true,
    },
    metaAddress:{
        type : String,
        required : true,
    },
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type:String,
        required:true
    },
    contact_no:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    resAddress:{
        type:String,
        required:true,
    },
    reason:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Help',helpSchema);
