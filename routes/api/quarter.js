// let quaterController = require('./../../controller/quarter');
let Quarter = require('../../models/quarterModel');
// let Course = require('../../models/courseModel')
let lodash = require('lodash')
var formidable = require('formidable');
// exports.getQuarterData = (req, res) => {
//     quaterController.createQuarter(req.body, (err, data) => {
//         res.json(err || data);
//     })
// }
exports.CreateQuaterData = (req, res) => {
    /////////////////////////
    // let data = JSON.parse(Object.keys(fields)[0]);
    let quarter = new Quarter(req.body);
    quarter.course = req.course;
    // req.course.quarter.push(quarter)    
        quarter.save().then(data => {
            return res.json({ QuarterDetais: data });

        })
    // var form = new formidable.IncomingForm();
    // form.parse(req, function (err, fields, files) {
    //     if (err) {
    //         res.status(400).json({ msg: 'error occcur' })
    //     } else {
    //         let data = JSON.parse(Object.keys(fields)[0]);
    //         let quarter = new Quarter(data);
    //         quarter.course = req.course;
    //         // req.course.quarter.push(quarter)    
    //             quarter.save().then(data => {
    //                 return res.json({ QuarterDetais: data });

    //             })
    //         }
    // });
}
exports.getDetails_By_Quarter_Name = (req, res) => {
    Quarter.find({ course: req.course._id }).populate("course", "_id name").exec((err, quarterData) => {
        if (err) {
            return res.status(400).json({ error: err })
        } else {
            res.json(quarterData)
        }
    })
}

exports.getQuaterData = (req, res) => {
    Quarter.find({}, (err, quarterData) => {
        if (err) {
            return res.status(400).json({ error: err })
        } else {
            res.json({ quarterData })
        }

    })
}

exports.fetchQuarterDataById = (req, res, next, Id) => {
    Quarter.findById(Id).exec((err, quarterData) => {
        if (err || !quarterData) {
            return res.status(400).json({ error: err })
        }
        req.quarter = quarterData
        next();
    })
}
exports.singleQuaterData = (req, res) => {
    return res.json(req.quarter);
}

exports.updateQuarterData = (req, res) => {
    let quarter = req.quarter;
    quarter = lodash.extend(quarter, req.body);
    quarter.save((err, quarterData) => {
        if (err) {
            return res.status(400).json({ error: error })
        } else {
            res.json({ quarterData })
        }
    })
}
















////////////////////////////////
 // const quarter = new Quarter();
    // quarter.courseName = req.body.courseName;
    // quarter.campus = req.body.campus;
    // quarter.city = req.body.city;
    // quarter.day = req.body.day;
    // quarter.quaterfee = req.body.quaterfee;
    // quarter.course_Name = req.course;
    // quarter.save()
    //   .then((result) => {
    //     Course.findOne({ courseName: quarter.courseName }, (err, course) => {
    //         if (course) {
    //             // The below two lines will add the newly saved review's 
    //             // ObjectID to the the User's reviews array field
    //             course.quarter.push(quarter);
    //             course.save((err,data)=>{
    //                 if(err){
    //                     return res.status(400).json({error:err})
    //                 }else{
    //                     res.json({data})
    //                 }
    //             });
    //             // res.json({ message: 'quarter created!' });
    //         }
    //     });
    //   })
    //   .catch((error) => {
    //     res.status(500).json({ error });
    //   });