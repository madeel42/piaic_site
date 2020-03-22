let courseController = require('./../../controller/course');
let Course = require('./../../models/courseModel');
let lodash = require('lodash');
var formidable = require('formidable');
exports.createCourseData = (req, res) => {
    // console.log(req.body);
    // var form = new formidable.IncomingForm();
    // form.parse(req, function(err, fields, files) {
    //     if(err) {
    //         return res.status(400).json({error:err})
    //     }else{
    //         let course = new Course(fields);
    //         course.quarter = req.quarter;
    //         course.save((err,data)=>{
    //             if(err){
    //                 return res.status(400).json(data)
    //             }else{
    //                 res.json({courseData:data})
    //             }
    //         })
    //     }
    //   });


    courseController.createCourse(req.body, (err, data) => {
        res.json(err || data);
    });
    // const {quater_name,course,batch,campus,city,day,quaterfee} = req.body;
    // let newCourse = new Course(req.body);
    // ;
}

exports.getAllCourseData = (req, res) => {
    Course.find({}, ((err, data) => {
        if (err) {
            return res.status(400).json({ error: err })
        } else {
            res.json(data)
        }
    }))
}

exports.courseDataById = (req, res, next, Id) => {
    Course.findById(Id).exec((err, courseData) => {
        if (err || !courseData) {
            return res.status(400).json({ error: err })
        }
        req.course = courseData;
        next();
    })
}
exports.getSingleCourse = (req, res) => {
    return res.json(req.course)
}

exports.updateCourse = (req, res) => {
    let course = req.course;
    course = lodash.extend(course, req.body);
    course.save((err, coursedata) => {
        if (err) {
            return res.status(400).json({ msg: 'courseData dos"nt updated' })
        } else {
            res.json(coursedata)
        }
    })

}

exports.deleteData = (req, res) => {
    let course = req.course;
    course.remove((err, courseData) => {
        if (err) {
            return res.status(400).json({ msg: "course dos'nt delete" })
        } else {
            res.json({ msg: "coursedata deleted successfully" });
        }
    })
}