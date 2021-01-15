const mongoose=require('mongoose');

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
//hhhohohohoho

const annual = mongoose.Schema({
    id:{type:String,
    requires:true},
    req_id:{type:Number},
    date:{type:Number,
        required:true},
    month:{type:Number},
    day:{type:Number},
    TAtoCover:{type:String},
    status:{type:String}
});

const compensation = mongoose.Schema({
    id:{type:String},
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

const sick = mongoose.Schema({
    id:{type:String,
    required:true},
    req_id:{type:Number},
    date:{type:Number},
    month:{type:Number},
    status:{type:Number}
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

module.exports= mongoose.model('AttendanceRecords', AttendanceRecords);


const HrMembers=mongoose.Schema({
    id:{type:String,
        required:true,unique:true},
    name:{type:String,
        required:true},

    email:{type:String,
    required:true,
    unique:true},
        token:{type:Number},
    password:{type:String,
        required:true,
    default:"123456"},
    salary:{type:Number},
    dayoff:{type:String,
    default:"Saturday"},
    extrainfo:{Type:String},
    gender:{type:String,
             required:true},
    
    annualdays:{type:Number},
    annualLeaverequests:[annual],
    compensationrequests:[compensation],
    accidentalLeaverequests:[accidental],
    maternityLeaverequests:[maternity],
    sickLeaverequests:[sick],
    accidentalLeave:{type:Number},

    maternityLeave:{type:Number,
    default:0},

    sickLeave:{type:Number,
    default:0},
    missingDays:{type:Number} ,
    hours:{type:Number},
    minutes:{type:Number},
    office:{type:String},
    
    AttendanceRecords: [AttendanceRecords]
});
module.exports= mongoose.model('HrMembers', HrMembers);