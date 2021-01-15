const mongoose = require('mongoose');

const dayoff = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    requestedDayoff:{type:String, required:true},
    currentDayoff:{type:String,required:true},
    acceptanceStatus:{type:Number},
   
});
module.exports= mongoose.model('dayoffRequests', dayoff);