import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import BookDetails from "./BookDetails";

const BookList = () => {
  return (
    <Row>
      <Col xs={8}>
        <Row>
          <Card
            style={{ width: "18rem" }}
            border="info"
            text="info"
            className="text-center shadow"
          >
            <Card.Body>Cowboy Bebop</Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            border="info"
            text="info"
            className="text-center shadow"
          >
            <Card.Body>Cowboy Bebop</Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            border="info"
            text="info"
            className="text-center shadow"
          >
            <Card.Body>Cowboy Bebop</Card.Body>
          </Card>
        </Row>
        <Row>
          <Card
            style={{ width: "18rem" }}
            border="info"
            text="info"
            className="text-center shadow"
          >
            <Card.Body>Cowboy Bebop</Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            border="info"
            text="info"
            className="text-center shadow"
          >
            <Card.Body>Cowboy Bebop</Card.Body>
          </Card>
          <Card
            style={{ width: "18rem" }}
            border="info"
            text="info"
            className="text-center shadow"
          >
            <Card.Body>Cowboy Bebop</Card.Body>
          </Card>
        </Row>
      </Col>
      <Col>
        <BookDetails />
      </Col>
    </Row>
  );
};

export default BookList;
