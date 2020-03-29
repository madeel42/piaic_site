const mongoose = require("mongoose");
const quizSchema = new mongoose.Schema({
  startQuiz: {
    type: Boolean
  },
});
const quiz = mongoose.model("quiz", quizSchema);
module.exports = quiz;
