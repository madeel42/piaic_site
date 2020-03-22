let Course = require('../models/courseModel');
module.exports = {

    createCourse :  (data, cb) => {

        let newCourse = new Course(data);
        newCourse.save(cb);
    }

}