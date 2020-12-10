import React from "react";
import { Table } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ProjectTableStudent from "./ProjectTableStudent";
import moment from 'moment'

function ProjectsTable({ projects,handleDeleteProject }) {
  console.log(projects);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            {/* <th>RepoURL</th>
            <th>LiveURL</th> */}
            <th>Student</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects?.map((project, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                {/* <td>{project.repoURL}</td>
              <td>{project.liveURL}</td> */}
                <ProjectTableStudent id={project.studentID} />
                <td>{moment(project.createdAt).format("MM/DD/YYYY hh:mm")}</td>
                <td>{moment(project.updatedAt).format("MM/DD/YYYY hh:mm")}</td>
                <td>
                  <Link to={`../project/${project.id}`}>
                    <VisibilityIcon />
                  </Link>
                </td>
                <td>
                  <Link to={`../project-form/${project.id}/${project.studentID}`}>
                    <EditIcon />
                  </Link>
                </td>
                <td style={{ cursor: "pointer" }}>
                  <DeleteForeverIcon
                    onClick={() => handleDeleteProject(project.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default ProjectsTable;
