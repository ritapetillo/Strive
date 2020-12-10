import React, { useEffect, useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { postReview, editReview, getReviewByID } from "../utils";

function NewReviewForm({ history, match }) {
  const [newReview, setNewReview] = useState({
    name: "",
    text: "",
    rate: "",
  });

  useEffect(() => {
    if (match.params.reviewID !== "new") {
      setReview();
    }

    console.log(match.params.reviewID);
  }, []);

  const setReview = async () => {
    const reviewToEdit = await getReviewByID(match.params.reviewID);
    setNewReview(reviewToEdit);
  };
  const handleChange = (e) => {
    const submittedReview = { ...newReview };
    submittedReview[e.target.name] = e.target.value;
    setNewReview(submittedReview);
    console.log(newReview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = "";
    if (match.params.reviewID === "new") {
      res = await postReview(match.params.projectID, newReview);
    } else {
      res = await editReview(
        match.params.projectID,
        match.params.reviewID,
        newReview
      );
    }
    console.log(res);
    if (res !== undefined) {
      setNewReview({
        name: "",
        text: "",
        rate: "",
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
          {match.params.reviewID === "new" ? "Add a Review" : "Edit Review"}
        </h3>
      </Row>
      <Row>
        <Form className="" onSubmit={(e) => handleSubmit(e)}>
          <Form.Row className="mt-3">
            <Form.Label>Review Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Project Title"
              name="name"
              value={newReview.name}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              placeholder="Description"
              name="text"
              value={newReview.text}
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row className="mt-3">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Rate"
              name="rate"
              value={newReview.rate}
              onChange={handleChange}
            />
          </Form.Row>

          <Button
            variant="danger"
            type="submit"
            className="mt-3 mr-3"
            onClick={(e) => {
              e.preventDefault();
              history.goBack(e);
            }}
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

export default NewReviewForm;
