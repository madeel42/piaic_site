const Topic = require("../../models/topicModel");
let lodash = require('lodash')
exports.createTopic = (req, res) => {
  let topic = new Topic(req.body);
  topic.quarter = req.quarter;
  topic.save((err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(data);
    }
  });
};

exports.getTopicData = (req, res) => {
  Topic.find({}, (err, data) => {
    if (err) {
      return res.json({ error: err });
    } else {
      res.json(data);
    }
  });
};
exports.fetchDataByTopicId = (req, res, next, id) => {
  Topic.findById(id).exec((err, topicData) => {
    if (err || !topicData) {
      return res.json({ error: err });
    }
    req.topic = topicData;
    next();
  });
};
exports.fetch_Single_Data_ByTopicId = (req, res) => {
  return res.json(req.topic);
};
exports.getAllTopicDetails_by_their_QuarterId = (req,res) => {
    Topic.find({quarter:req.quarter._id}).populate("quarter","_id quarterName").exec((err,topicData)=>{
        if(err){
            return res.json({error:err})
        }else{
            res.json(topicData)
        }
    })
}
exports.UpdateTopicData = (req,res) => {
let topic  = req.topic;
topic  = lodash.extend(topic,req.body);
topic.save((err,data)=>{
  if(err){
    return res.json({error:err})
  }else{
    res.json(data)
  }
})
}