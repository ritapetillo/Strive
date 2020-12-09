const express = require("express");
const server = express();
const studentsRoutes = require("./students");
const projectsRoutes = require("./projects");
const {genericErrorHandler,unauthorizedHandler,forbiddenHandler,notFoundHandler,badRequestHandler} = require('./errorHandling')
const cors = require("cors");

//CONFIG
//enable cors
server.use(cors());
//going to make express able to read the bodu
server.use(express.json());
//I'm saying use the routes at in students/index.js for any path /students
server.use("/students", studentsRoutes);
server.use("/projects", projectsRoutes);

server.use(notFoundHandler);
server.use(badRequestHandler);
server.use(unauthorizedHandler);
server.use(forbiddenHandler);
server.use(genericErrorHandler);



const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log("connected at", PORT));
