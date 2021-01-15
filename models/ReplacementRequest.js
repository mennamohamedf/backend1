const mongoose = require('mongoose');

const ReplacementRequest = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    requestedDate:{type:Date, required:true},
    slotNumber:{type:String, required:true},
    TAToReplace:{type:String,required:true},
    status:{type:Number}, 
});
module.exports= mongoose.model('ReplacementRequest', ReplacementRequest);
