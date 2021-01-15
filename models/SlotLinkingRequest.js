const mongoose = require('mongoose');

const slotLinking = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    requestedDay:{type:String, required:true},
    slotNumber:{type:String, required:true},
    acceptanceStatus:{type:Number},
   
});
module.exports= mongoose.model('SlotLinkingRequest', slotLinking);