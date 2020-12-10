import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { getStudentById, getProjectById, deleteProject,getReviewsByProjectId,deleteReview } from "../utils";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
import moment from "moment";
import ReviewsTable from "./ReviewsTable";

function ProjectDetails({ match, history }) {
  const [student, setStudent] = useState(false);
  const [project, setProject] = useState(false);
  const [reviews,setReviews] = useState(false)

  useEffect(() => {
    getProject();
    getReviews()
  }, []);

  const getStudent = async (id) => {
    const student = await getStudentById(id);
    setStudent(student);
  };

  const getProject = async () => {
    const project = await getProjectById(match.params.projectID);
    await setProject(project);
    getStudent(project.studentID);
  };
   const getReviews = async () => {
     const reviews = await getReviewsByProjectId(match.params.projectID);
     setReviews(reviews);
   };

  const handleDeleteReview = async (id) => {
    let res = await deleteReview(id);
      const reviews = await getReviewsByProjectId(match.params.projectID);
      setReviews(reviews);
  };
 
  return (
    <div className="col-10" style={{ margin: "0 auto" }}>
      <Row style={{ marginTop: "50px" }}>
        <Col sm={6} className="text-center">
          {/* <AccountBoxIcon style={{ fontSize: "300px" }} /> */}
          <img
            className="img-fluid"
            src={`http://localhost:3001/img/projects/${project?.id}.jpeg`}
          />
        </Col>
        <Col className="text-left mt-4">
          <Row>
            <h2 className="mb-4">Project Details</h2>
            <h5 className="mb-4">Project Title: {project?.name}</h5>
            <p>
              <b classNmae="mb-2">Project Description:</b>
              <br></br> {project?.description}{" "}
            </p>
            <p>
              <b>Autor: </b>
              {student?.name} {student?.surname} - {student?.email}
            </p>
          </Row>
        </Col>
      </Row>
      <Row className="my-4">
        <Button onClick={()=>history.push(`../review-form/${project.id}/new`)}>Add a Review</Button>
      </Row>
      <Row>
        <ReviewsTable reviews={reviews} handleDeleteReview={handleDeleteReview}/>
      </Row>
    </div>
  );
}

export default ProjectDetails;
