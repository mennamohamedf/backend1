const mongoose = require('mongoose');

const CompensationRequest = mongoose.Schema({
    id:{type:String},
    req_id:{type:Number},
    date:{type:Number},
    day:{type:String},
    month:{type:Number},
    reason:{type:String},
    status:{type:Number}
   
});
module.exports= mongoose.model('CompensationRequest', CompensationRequest);
