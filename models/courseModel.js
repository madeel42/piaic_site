const mongoose = require('mongoose');
// const {ObjectId} = mongoose.Schema;
const courseSchema = new mongoose.Schema({
    // course: {
        name: String,
        batch:String,
        city:String
        // status:String,
  
    // quarter : [{
    //     type:ObjectId,
    //     ref: 'Quarter'                                
    // }],
    // quarter: [{
    //     course:String,  
    //     batch: String,
    //     campus: String,
    //     city: String,
    //     day: String,
    //     quaterfee: String,
    // }]
    // }]
    // }


})
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;