import React, { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { postStudent, editStudent, getStudentById } from "../utils";

function NewStudentForm({ history, match }) {
  const [newStudent, setNewStudent] = useState({
    name: "",
    surname: "",
    email: "",
    dob: "",
  });

  useEffect(() => {
    if (match.params.id !== "new") {
      setStudent();
    }

    console.log(match.params.id);
  }, []);

  const setStudent = async () => {
    const studentToEdit = await getStudentById(match.params.id);
    setNewStudent(studentToEdit);
  };
  const handleChange = (e) => {
    const submittedStudent = { ...newStudent };
    submittedStudent[e.target.name] = e.target.value;
    setNewStudent(submittedStudent);
    console.log(newStudent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = "";
    if (match.params.id === "new") {
      res = await postStudent(newStudent);
    } else {
      res = await editStudent(match.params.id, newStudent);
    }
    console.log(res);
    if (res.length >= 0) {
      setNewStudent({
        name: "",
        surname: "",
        email: "",
        dob: "",
      });
      history.push("/");
    } else {
      alert("There was an error posting the student");
    }
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Row className="mb-4">
        {" "}
        <h3 className="mb-3">
          {match.params.id === "new" ? "Add a Student" : "Edit Student"}
        </h3>
      </Row>
      <Row>
        <Form className="" onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First name"
              name="name"
              value={newStudent.name}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last name"
              name="surname"
              value={newStudent.surname}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={newStudent.email}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={newStudent.dob}
              onChange={handleChange}
            />
          </Form.Row>

          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
}

export default NewStudentForm;
