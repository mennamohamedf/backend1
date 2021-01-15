const mongoose=require('mongoose');

const location = mongoose.Schema({
    roomNo:{type:String,
    required: true,
    unique: true},
    roomType:{type:String},
    capacity:{type:Number}
});

module.exports= mongoose.model('Location', location);