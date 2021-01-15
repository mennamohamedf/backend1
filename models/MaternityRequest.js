const mongoose = require('mongoose');

const MaternityRequest = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    req_id:{type: Number},
    dateFrom:{type:Number},
    dateTo:{type:Number},
    monthFrom:{type:Number},
    monthTo:{type:Number},
    document:{type:String,required:true},
    status:{type:Number},
   
});
module.exports= mongoose.model('MaternityRequest', MaternityRequest);
