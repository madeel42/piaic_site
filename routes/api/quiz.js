const Quiz = require("../../models/quizModel");
exports.createQuiz = (req, res) => {
  let quiz = new Quiz(req.body);
  console.log(req.body)
  quiz.save((err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(data);
    }
  });
};
