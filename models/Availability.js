
const mongoose= require('mongoose');
// const Location = mongoose.Schema({
//     roomNo:{type:String,
//     required: true,
//     unique: true},
//     roomType:{type:String},
//     capacity:{type:Number}
// });

const Availability = mongoose.Schema({          // added on sunday
    day:{type:String,
    required:true
},
    first:[String],
    second:[String],
    third:[String],
    fourth:[String],
    fifth:[String]
    // first:[Location],
    // second:[Location],
    // third:[Location],
    // fourth:[Location],
    // fifth:[Location]
});

module.exports= mongoose.model('Availability', Availability);