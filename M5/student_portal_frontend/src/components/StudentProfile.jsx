import React,{useEffect,useState} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { getStudentById, getProjectByStudentId, deleteProject } from "../utils";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {Link} from 'react-router-dom'
import ProjectsTable from './ProjectsTable';
import moment from "moment";



function StudentProfile({match,history}) {
    const [student, setStudent] = useState(false);
    const [projects, setProjects] = useState(false);



    useEffect(() => {
        getStudent()
        getProjects()
        
    }, [])
    
    const getStudent = async () => {
        const student = await getStudentById(match.params.id)
        setStudent(student)
    }

     const getProjects = async () => {
       const projects = await getProjectByStudentId(match.params.id);
       setProjects(projects);
     };
    
  const handleDeleteProject = async (id) => {
    let res = await deleteProject(id);
    this.setProjects();
  };
    return (
      <div className="col-10" style={{ margin: "0 auto" }}>
        <Row style={{ marginTop: "50px" }}>
          <Col sm={6} className="text-center">
            <AccountBoxIcon style={{ fontSize: "300px" }} />
          </Col>
          <Col className="text-left mt-4">
            <h2>
              {student?.name} {student?.surname}
            </h2>
            <h5>Date of Birth: {moment(student?.dob).format('MM/DD/YYYY')}</h5>
            <h5>Email: {student?.email}</h5>
            <h6>Projects: {projects?.length}</h6>
          </Col>
        </Row>
        <Row className="mt-4 mb-4">
          <Button
            onClick={() => history.push("/project-form/new/" + student.id)}
          >
            Add New Project
            {/* <Link to={}>Add Project</Link> */}
          </Button>
        </Row>
        <Row>
          <ProjectsTable
            projects={projects}
            handleDeleteProject={handleDeleteProject}
          />
        </Row>
      </div>
    );
}

export default StudentProfile
