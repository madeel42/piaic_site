const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
const app = express();

// Connceting Database
connectDB();


app.use(express.json({ extended: false }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })


app.get('/', (req, res) => res.send("API is runing"));

let { createCourseData } = require("./routes/api/course");
let { courseDataById } = require("./routes/api/course");
let { getAllCourseData } = require("./routes/api/course");
let { getSingleCourse } = require("./routes/api/course");
let { deleteData } = require("./routes/api/course");
let { updateCourse } = require("./routes/api/course");
// let {getQuarterData} = require('./routes/quarter')
let { fetchQuarterDataById } = require("./routes/api/quarter");
let { getQuaterData } = require("./routes/api/quarter");
let { CreateQuaterData } = require("./routes/api/quarter");
let { getDetails_By_Quarter_Name } = require("./routes/api/quarter");
let { singleQuaterData } = require("./routes/api/quarter");
let { updateQuarterData } = require("./routes/api/quarter");

//////////////////Routes end////////////
app.post("/createCourse", createCourseData);
app.get("/getSingleCourse/:courseId", getSingleCourse);
app.put("/updateCourse/:courseId", updateCourse);
app.get("/getCourseData", getAllCourseData);
app.delete("/deleteCourseData/:courseId", deleteData);
app.param("courseId", courseDataById);
// app.post('/createQuarterData',CreateQuaterData)

app.post("/createQuarterData/:courseId", CreateQuaterData);
// app.post('/createQuater', getQuarterData);
app.get("/getQuaterData", getQuaterData);
app.get("/quarterAllDetails/:courseId", getDetails_By_Quarter_Name);
app.get("/QuaterDataById/:quarterId", singleQuaterData);
app.put("/updateQuarterData/:quarterId", updateQuarterData);
app.param("quarterId", fetchQuarterDataById);
///////////////////////////////////////////////////////
///////////////////Here we use Topic routes ////////////////
let {createTopic} = require('./routes/api/topic')
let {getTopicData} = require('./routes/api/topic')
let {fetchDataByTopicId} = require('./routes/api/topic')
let {UpdateTopicData} = require('./routes/api/topic')
let {getAllTopicDetails_by_their_QuarterId} = require('./routes/api/topic')
let {fetch_Single_Data_ByTopicId} = require('./routes/api/topic')
////////////////////////////////////////////////////////////////
app.post('/createTopic/:quarterId',createTopic)
app.get('/getTopicData',getTopicData)
app.get('/getSingleDataByTopicId/:topicId',fetch_Single_Data_ByTopicId)
app.put('/updateTopicData/:topicId',UpdateTopicData)
app.get('/getAllTopicDetails_by_their_QuarterId/:quarterId',getAllTopicDetails_by_their_QuarterId)
app.param('topicId',fetchDataByTopicId);
///////////////////////////////////////////////
/////////////////////////here We bring ExamDesign//////////
let {createExam} = require('./routes/api/examDesign')
///////////////////////////////////////////////////////////
//////////////////////////here we use examDesign/////////////////
app.post('/createExam',createExam)
/////////////////////////////////////////////////////
app.get('/', (req, res) => res.send("API is runing"));

//Defining all routes

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));