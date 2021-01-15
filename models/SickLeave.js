const mongoose = require('mongoose');

const SickLeave = mongoose.Schema({
    id:{type:String,
    required:true},
    req_id:{type:Number},
    date:{type:Number},
    month:{type:Number},
    status:{type:Number}
});

module.exports = mongoose.model('SickLeave', SickLeave);