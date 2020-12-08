import React from "react";
import { Table } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import {Link} from 'react-router-dom'

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
            <th colSpan="2"></th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.surname}</td>
              <td>{student.email}</td>
              <td>{student.dob}</td>
              <td>
                <Link to={`student-form/${student.id}`}>
                  <EditIcon />
                </Link>
              </td>
              <td style={{cursor:'pointer'}}>
                      <DeleteForeverIcon onClick={ ()=>handleDelete(student.id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default StudentTable;
