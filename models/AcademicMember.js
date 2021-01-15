const mongoose = require('mongoose');
// const DayOffRequest = require('./DayOffRequest');
// const SickLeave = require('./SickLeave');
//don't forget to add attendance records
const slot= [{                      // added on sunday 
    timing:{type:String},
    course:{type:String},
    location:{type:String}
}];

const Signs = mongoose.Schema({
    hourin:{type:Number},
    minutein:{type:Number},
    hourout:{type:Number},
    minuteout:{type:Number},
    signin:{type:Number,
    default:0},
    signout:{type:Number,
    default:0}
});

const dayoff = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    requestedDayoff:{type:String, required:true},
    currentDayoff:{type:String,required:true},
    acceptanceStatus:{type:Number},
   
});

const annual = mongoose.Schema({
    id:{type:String,
    },
    date:{type:Number,
        required:true},
    month:{type:Number},
    day:{type:Number},
    TAtoCover:{type:String},
    status:{type:String}
});
//hghukyfg
const compensation = mongoose.Schema({
    id:{type:String},
    req_id:{type: Number},
    date:{type:Number},
    day:{type:String},
    month:{type:Number},
    status:{type:Number},
   
});
const accidental = mongoose.Schema({
    id:{type:String,
    required:true},
    req_id:{type: Number},
    date:{type:Number},
    month:{type: Number},
    reason:{type: Number},
    status:{type:Number}
});

const maternity = mongoose.Schema({
    id:{type:String,
    required:true,unique:true},
    req_id:{type: Number},
    dayFrom:{type:Number},
    dayTo:{type:Number},
    monthFrom:{type:Number},
    monthTo:{type:Number},
    document:{type:String,required:true},
    status:{type:Number},
});

const schedule = mongoose.Schema({
    day:{type:String,
    required:true},
    first:[slot],              // type slot added on sunday 
    second:[slot],
    third:[slot],
    fourth:[slot],
    fifth:[slot],
});
const ReplacementRequest = mongoose.Schema({
    id:{type:String},
   receiver_id:{type:String},
    day:{type:String},
    timing:{type:String},
    course:{type:String},
    location:{type:String},
    request_status:{type:String},
    
});

const slotLinking = mongoose.Schema({
    id:{type:String,
    required:true},
    requestedDay:{type:String, required:true},
    slotNumber:{type:String, required:true},
    acceptanceStatus:{type:Number},
   
});

const AttendanceRecords = mongoose.Schema({
    day:{type:Number,
    required:true},
    date:{type:Number,
    required:true},
    month:{type:Number,
    required:true},
    hours:{type:Number},
    minutes:{type:Number},
    accumilatedhours:{type:Number},
    accumilatedminutes:{type:Number},
    signs: [Signs]

});
const SickLeave = mongoose.Schema({
    id:{type:String,
    required:true},
    date:{type:Date},
    status:{type:Number}
});


//module.exports= mongoose.model('Schedule', schedule);
//const schedule = require('./Schedule');
const members = mongoose.Schema({
    id:{type:String,
        required:true,
        unique:true
    },
    name:{type:String,
    required:true},
    gender:{type:String,
    required:true},
    email:{type:String,
        required:true,
        unique:true
    },
    password:{type:String,
    required:true},
    extrainfo:{type:String},
    department:{type:String},
    faculty:{type:String},
    dayoffrequests:[dayoff],
    slotlinkingrequests:[slotLinking],
    annualLeaverequests:[annual],
    compensationrequests:[compensation],
    accidentalLeaverequests:[accidental],
    maternityLeaverequests:[maternity],
    coursecoordindator:{type:Number,
    default:0},
    courseinstructor:{type:Number,
    default:0},    
    HOD:{type:Number,
    default:0},     
    salary:{type:Number},
    dayoff:{type:String},
    annualdays:{type:Number},
    accidentalLeave:{type:Number},
    maternityLeave:{type:Number},
    sickLeave:{type:Number},
    sickleaverequests:[SickLeave],
    scheduleFlag:{type:Boolean},
    office:{type:String},
    Schedule: [schedule],
    courses:[String],
    AttendanceRecords: [AttendanceRecords]
});
//export schema as a model
module.exports= mongoose.model('Members', members);