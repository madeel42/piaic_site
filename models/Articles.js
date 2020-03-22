const mongoose = require("mongoose");
const ArticleSchema = new mongoose.Schema({
  // now we want to create a Article  refering to a specific user and for that
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  text: {
    type: String
  },
  name: {
    type: String
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
      },
      text: {
        type: String
      },
      name:{
          type:String
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Article = mongoose.model("Article", ArticleSchema);
