const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");
const { WSAEHOSTDOWN } = require("constants");
const file = path.join(__dirname, "students.json");
const studentsString = fs.readFileSync(file).toString();
const { readFile, writeFile,writeImages } = require("../utils");
const studentsArray = JSON.parse(studentsString);
const allProjectsArray = readFile("projects", "projects.json");
const multer = require("multer");
const upload = multer({});

const studentsImgStaticFolder = path.join(__dirname, "../public/img/students");
//utils
const checkEmail = (email) => {
  return studentsArray.find((student) => student.email === email);
};
const checkId = (id) => {
  return studentsArray.find((student) => student.id === id);
};
//1. GET all students
// http://localhost:3001/students/
router.get("/", (req, res) => {
  res.status(200).send(studentsArray);
});

//2. GET single student
// http://localhost:3001/students/:id
router.get("/:id", (req, res) => {
  const student = studentsArray.find((student) => student.id === req.params.id);
  res.status(200).send(student);
});

//3. POST create a student
// http://localhost:3001/students
router.post("/", (req, res) => {
  //create a new object student
  const newStudent = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    dob: req.body.dob,
    id: uniqid() + uniqid.time(),
  };
  //First make sure that there is no other user associated with this emai
  //make sure the id is unique
  if (checkEmail(newStudent.email) === undefined) {
    //push the new students in the array of students
    studentsArray.push(newStudent);
    fs.writeFileSync(file, JSON.stringify(studentsArray));
    res.status(200).send(studentsArray);
  } else {
    //if there is a student associated to this email, I throw an error
    res.status(400).send({
      error:
        "This email is already associated to another account.Please choose another email.",
    });
  }
});

//4. PUT edit a student
// http://localhost:3001/students/:id
router.put("/:id", (req, res) => {
  const modifiedStudent = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    dob: req.body.dob,
    id: req.params.id,
  };
  //I search the index of the user in the array of students
  const studentFound = studentsArray.findIndex(
    (student) => student.id === req.params.id
  );
  //If there is a student with this ID, then I'm going to replace the previous student with the new modified one at that index
  if (studentFound >= 0) {
    studentsArray[studentFound] = modifiedStudent;
    fs.writeFileSync(file, JSON.stringify(studentsArray));
    console.log(studentsArray);
    res.status(200).send(studentsArray);
  } else {
    //if there is no student associted to that id, then I throw an error of no user found
    res.status(400).send({ error: "No student found" });
  }
});

//5. DELETE a student
// http://localhost:3001/students/:id
router.delete("/:id", (req, res) => {
  const newArrayStudents = studentsArray.filter(
    (student) => student.id !== req.params.id
  );
  fs.writeFileSync(file, JSON.stringify(newArrayStudents));

  res.status(200).send(newArrayStudents);
});

// 6.GET /students/:studentsID/projects/ => get all the projects for a student with a given ID
router.get("/:studentID/projects", (req, res, next) => {
  try {
    const studentProject = allProjectsArray.filter(
      (project) => project.studentID === req.params.studentID
    );

    res.send(studentProject);
  } catch (err) {
    next(err);
  }
});

// 7.POST /students/:studentsID/uploadPhoto/ => upload student Picture
router.post(
  "/:studentID/uploadPhoto",
  upload.single("avatar"),
  async (req, res, next) => {
    try {
      fs.writeFileSync(
        path.join(studentsImgStaticFolder, `${req.params.studentID}.jpeg`),
        req.file.buffer
      );
      console.log(req.file)
      res.send("image correctly saved");
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
);

module.exports = router;
