const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
let topicSchema = new mongoose.Schema({
  quarter:{
    type:ObjectId,
    ref:'Quarter'
  },
  name: {
    type: String
  },
  des: {
    type: String
  }
});
let topic = mongoose.model("topic", topicSchema);
module.exports = topic;
