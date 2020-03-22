const ExamDesign = require("../../models/examDesinModel");
exports.createExam = (req, res) => {
  let examDesign = new ExamDesign(req.body);
  console.log(examDesign);
  examDesign.save((err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json({ data, success: true });
    }
  });
};
