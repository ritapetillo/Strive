import React, { Component } from "react";
import StudentTable from "./StudentTable";
import {
  fetchStudents,
  deleteStudent,
  getAllProjects,
  deleteProject,
} from "../utils";
import ProjectsTable from "./ProjectsTable";

export default class BackOffice extends Component {
  state = {
    students: [],
    projects: [],
  };

  setStudents = async () => {
    const students = await fetchStudents();
    this.setState({ students });
  };
  setProjects = async () => {
    const projects = await getAllProjects();
    this.setState({ projects });
  };
  componentDidMount = async () => {
    await this.setStudents();
    await this.setProjects();
  };
  handleDelete = async (id) => {
    let res = await deleteStudent(id);
    this.setStudents();
  };
  handleDeleteProject = async (id) => {
    let res = await deleteProject(id);
    this.setProjects();
  };
  render() {
    const { students, projects } = this.state;
    return (
      <div>
        <h2 className="mb-4 text-center">Student List</h2>
        <StudentTable students={students} handleDelete={this.handleDelete} />
        <h2 className="mb-4 text-center">Project List</h2>
        <ProjectsTable
          projects={projects}
          handleDeleteProject={this.handleDeleteProject}
        />
      </div>
    );
  }
}
