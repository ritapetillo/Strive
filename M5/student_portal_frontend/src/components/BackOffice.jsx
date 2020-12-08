import React, { Component } from "react";
import StudentTable from "./StudentTable";
import { fetchStudents, deleteStudent } from "../utils";

export default class BackOffice extends Component {
  state = {
    students: [],
  };

  setStudents = async () => {
    const students = await fetchStudents();
    this.setState({ students });
  };
  componentDidMount = async () => {
    await this.setStudents();
  };
  handleDelete = async (id) => {
    let res = await deleteStudent(id);
    this.setStudents();
  };
  render() {
    const { students } = this.state;
    return (
      <div>
        <h2 className="mb-4 text-center">Student List</h2>
        <StudentTable students={students} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
