import React from "react";
import { Table } from "react-bootstrap";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import moment from "moment";

function ReviewsTable({ reviews ,handleDeleteReview}) {
  console.log(reviews);
  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Review</th>
            <th>Rate</th>
            <th>CreatedAt</th>
            <th>UpdatedAt</th>
            <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody>
          {reviews &&
            reviews?.map((review, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{review.name}</td>
                <td>{review.text}</td>
                <td>{review.rate}</td>
                <td>{moment(review.createdAt).format("MM/DD/YYYY hh:mm")}</td>
                <td>{moment(review.updatedAt).format("MM/DD/YYYY hh:mm")}</td>
                <td>
                  <Link to={`../review/${review.id}`}>
                    <VisibilityIcon />
                  </Link>
                </td>
                <td>
                  <Link to={`../review-form/${review.projectID}/${review.id}`}>
                    <EditIcon />
                  </Link>
                </td>
                <td style={{ cursor: "pointer" }}>
                  <DeleteForeverIcon onClick={ ()=>handleDeleteReview(review.id)}/>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
}

export default ReviewsTable;
