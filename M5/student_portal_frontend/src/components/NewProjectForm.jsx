import React, { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { postProject, editProject, getProjectById } from "../utils";

function NewProjectForm({ history, match }) {
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    repoURL: "",
    liveURL: "",
    studentID: "",
  });

  useEffect(() => {
    if (match.params.id !== "new") {
      setProject();
    }

    console.log(match.params.id);
  }, []);

  const setProject = async () => {
    const projectToEdit = await getProjectById(match.params.id);
    console.log(projectToEdit);
    setNewProject(projectToEdit);
  };
  const handleChange = (e) => {
    const submittedProject = { ...newProject };
    submittedProject[e.target.name] = e.target.value;
    setNewProject(submittedProject);
    console.log(newProject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = "";
    if (match.params.id === "new") {
      newProject.studentID = match.params.studentID;
      res = await postProject(newProject);
    } else {
      res = await editProject(match.params.id, newProject);
    }
    console.log(res);
    if (res !== undefined) {
      setNewProject({
        name: "",
        description: "",
        repoURL: "",
        liveURL: "",
        studentID: "",
      });
      if (res.error === undefined) {
        history.goBack();
      } else {
        alert(res.error);
      }
    } else {
      alert(res);
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Row className="mb-4">
        {" "}
        <h3 className="mb-3">
          {match.params.id === "new" ? "Add a Project" : "Edit Project"}
        </h3>
      </Row>
      <Row>
        <Form className="" onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              name="name"
              value={newProject.name}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description"
              name="description"
              value={newProject.description}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Repo URL</Form.Label>
            <Form.Control
              placeholder="Repo URL"
              name="repoURL"
              value={newProject.repoURL}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Live URL</Form.Label>
            <Form.Control
              placeholder="Live URL"
              name="liveURL"
              value={newProject.liveURL}
              onChange={handleChange}
            />
          </Form.Row>
          <Button
            variant="danger"
            type="submit"
            className="mt-3 mr-3"
            onClick={() => history.push("/")}
          >
            Dismiss
          </Button>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
}

export default NewProjectForm;
