const mongoose = require('mongoose');

const AnnulaLeaves = mongoose.Schema({
    id:{type:String,
    required:true},
    req_id:{type:Number},
    date:{type:Date,
    required:true},
    month:{type:Number},
    day:{type:String},
    TAtoCover:{type:String},
    status:{type:Number}
});

module.exports = mongoose.model('AnnulaLeaves', AnnulaLeaves);