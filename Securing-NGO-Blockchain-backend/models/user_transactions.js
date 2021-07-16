const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
   user:{
     type:String,
     required:true  
   }, 
   ngo_name :{
       type:String,
       required:true
   },
   ngo_address:{
       type:String,
       required:true
   },
   amount:{
       type:String,
       required:true
   },
   date:{
       type:String,
       required:true
   }

});

module.exports=mongoose.model('User_Trans',transactionSchema);