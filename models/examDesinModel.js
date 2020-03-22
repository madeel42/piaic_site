const mongoose = require('mongoose');
let examSchema  = mongoose.Schema({
    addquestion:{
        type:String
    },
    answers:[]
})
const ExamDesgin = mongoose.model('examDesgin',examSchema);
module.exports = ExamDesgin;