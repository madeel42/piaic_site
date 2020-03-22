const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quarter: {
        type: String,
        required: true
    },
    courseID: {
        type: number
    }
})
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;