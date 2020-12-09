const express = require("express");
const path = require("path");
const fs = require("fs");
const { all } = require("../students");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { readFile, writeFile } = require("../utils");
const uniqid = require("uniqid");

const allProjects = readFile("projects", "projects.json");

// GET /projects => returns the list of projects
router.get("/", (req, res, next) => {
  try {
    if (req.query.name) {
      try {
        const fitleredProjByName = allProjects.filter(
          (project) => project.name === req.query.name
        );
          res.send(fitleredProjByName);
       
      } catch (err) {
        next(err);
      }
    } else {
      res.send(allProjects);
    }
  } catch (err) {
    //insert error handling
    console.log(err);
  }
});

//      GET /projects/id => returns a single project
router.get("/:id", (req, res, next) => {
  try {
    const project = allProjects.find((project) => project.id === req.params.id);
    if (project) {
      res.send(allProjects);
    } else {
      //insert error handling
      const err = new Error();
      err.httpStatusCode = 404;
      next(err);
    }
  } catch (err) {
    //insert error handling
    console.log(err);
    next(err);
  }
});

//      POST /projects => create a new project (Add an extra property NumberOfProjects on student and update it every time a new project is created)
router.post(
  "/",
  [
    check("name")
      .exists()
      .isString()
      .withMessage("Name is a mandatory fied and must be a string"),
    check("description")
      .exists()
      .isString()
      .withMessage("Description is a mandatory fied and must be a string"),
    check("repoURL").isURL().withMessage("Repo URL field must be a URL"),
    check("liveURL").isURL().withMessage("Live URL field must be a URL"),
  ],
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      //if there are no validation errors, then I go ahed and perform the request
      if (errors.isEmpty()) {
        const newProject = {
          ...req.body,
          id: uniqid() + uniqid.time(),
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };
        allProjects.push(newProject);
        writeFile("projects", "projects.json", allProjects);
        res.send(newProject);
      }
      //if there are validation errors, I send a bad request error which will be handled by my error handling file
      else {
        const err = new Error();
        err.message = errors;
        err.httpStatusCode = 400;
        next(err);
      }
    } catch (err) {
      //handle error
      next(err);
    }
  }
);

//      PUT /projects/id => edit the project with the given id
router.put(
  "/:id",
  [
    check("name")
      .exists()
      .isString()
      .withMessage("Name is a mandatory fied and must be a string"),
    check("description")
      .exists()
      .isString()
      .withMessage("Description is a mandatory fied and must be a string"),
    check("repoURL").isURL().withMessage("Repo URL field must be a URL"),
    check("liveURL").isURL().withMessage("Live URL field must be a URL"),
  ],
  (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const err = new Error();
        err.httpStatusCode = 400;
        err.message = errors;
        next(err);
      } else {
        const projectEdited = {
          ...req.body,
          id: req.params.id,
          updatedAt: Date.now(),
        };
        const projectIndex = allProjects.findIndex(
          (project) => project.id === req.params.id
        );
        if (projectIndex >= 0) {
          allProjects[projectIndex] = projectEdited;
          writeFile("projects", "projects.json", allProjects);
          res.send(projectEdited);
        } else {
          //handle error NOT FOUND
          console.log("not found");
          const err = new Error();
          err.httpStatusCode = 404;
          next(err);
        }
      }
    } catch (err) {
      //handle error
      next(err);
    }
  }
);

//      DELETE /projects/id => delete the project with the given id
router.delete("/:id", (req, res, next) => {
  try {
    const newProjectsArray = allProjects.filter(
      (project) => project.id !== req.params.id
    );
    writeFile("/projects", "projects.json", newProjectsArray);
    res.send(newProjectsArray);
  } catch (err) {
    //handle error
    next(err);
  }
});

module.exports = router;
