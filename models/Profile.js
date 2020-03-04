const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    // now we want to create a profile refering to a specific user and for that 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Profile = mongoose.model('profile', ProfileSchema);