const mongoose = require('mongoose');
const {ObjectId}  = mongoose.Schema;
let quarterSchema = new mongoose.Schema({
    course:{
        type:ObjectId,
        ref:'Course'  
    },
    quarterName: String,
    batch: String,
    campus: String,
    day: String,
    year:String,
    quaterfee: String,
    
    
})
const Quarter = mongoose.model('Quarter',quarterSchema);
module.exports = Quarter;
