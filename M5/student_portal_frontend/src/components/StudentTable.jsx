import React from "react";
import { Table } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from 'react-router-dom'
import VisibilityIcon from "@material-ui/icons/Visibility";
import moment from 'moment'

function StudentTable({ students,handleDelete }) {
  console.log(students);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DoB</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.email}</td>
              <td>{moment(student.dob).format("MM/DD/YYYY")}</td>
              <td className="text-center">
                <Link to={`student/${student.id}`}>
                  <VisibilityIcon />
                </Link>
              </td>
              <td className="text-center">
                <Link to={`student-form/${student.id}`}>
                  <EditIcon />
                </Link>
              </td>
              <td style={{ cursor: "pointer" }} className="text-center">
                <DeleteForeverIcon onClick={() => handleDelete(student.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default StudentTable;
