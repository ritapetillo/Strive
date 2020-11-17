import React from 'react'
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import UnfoldLessIcon from "@material-ui/icons/UnfoldLess";
import "../style/BookList.css";


export default function BookList({bookList, title,reduce}) {
    return (
      <Container>
        <div className="d-flex justify-content-between">
                <h3 className="bookList__title text-left">{title}</h3>
                <UnfoldLessIcon className="reducer" onClick={ ()=>reduce(title)}></UnfoldLessIcon>
        </div>
        <Row>
          {bookList.map((book) => (
            <Col className="col-6 col-md-3 col-lg-2 my-2">
              <Card key={book.asin}>
                <div className="bookList__image-container">
                  <Card.Img variant="top" src={book.img} />
                </div>
                <Card.Body>
                  <Card.Title className="text-left">{book.title}</Card.Title>
                  <div className="bookList__price">
                    <h5>$ {book.price}</h5>
                    <AddShoppingCartIcon />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
}
