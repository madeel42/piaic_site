const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
    // now we want to create a profile refering to a specific user and for that 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    userName: {
        type: String,

    },
    city: {
        type: String,

    },
    gender: {
        type: String,

    },
    program: {
        type: String,

    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = Profile = mongoose.model('profile', ProfileSchema);