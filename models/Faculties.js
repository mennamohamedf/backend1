const mongoose=require('mongoose');
//const AcademicMember = require('./AcademicMember.js');
//AcademinMemberSchema = mongoose.model('AcademicMember').schema;
const slot= [{                      // added on sunday 
    timing:{type:String},
    course:{type:String},
    location:{type:String},
    AM:{type:String}
}];

const schedule = mongoose.Schema({
    day:{type:String},
    //required:true},
    first:[slot],              // type slot added on sunday 
    second:[slot],
    third:[slot],
    fourth:[slot],
    fifth:[slot],
});

//module.exports= mongoose.model('Schedule', schedule);
//const schedule = require('./Schedule');

const courses = mongoose.Schema({
    id:{type:String
      //  required:true,
        //unique:true,
       //dropDups: true},
    },
    name:{type:String},
    coordinator:{type:String},
    instructor:[String],
    TAs:[String],
    coverage:{type:Number},
    courseSchedule: [schedule],
    NoOfSlots:{type:Number},
    NoOfAssignedSlots:{type:Number,
    default:0}
}, {sparse: true});

module.exports= mongoose.model('Course', courses);

const departments = mongoose.Schema({
    id:{type:Number},
    //required:true,
    //unique:true},
    name:{type:String},
    //required:true},
    HOD:{type : String,
    default:"No HOD assigned" },
    courses: [courses]
}, {sparse: true});

//module.exports = mongoose.model('Department', departments);
module.export=departments;
const faculty = mongoose.Schema({
    id:{type:Number,
    required:true,
    //unique:true},
    },
    name:{type:String},
    departments : [departments]
});

//let facRow = await faculties.updateOne({'id': fac.id, 'departments': {'$elemMatch': {'id': deps.id, 'courses': {'$elemMatch' :{'id':coures.id}}}}},{'$push': {'departments.'}});

module.exports = mongoose.model('Faculties', faculty);

