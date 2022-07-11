import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import BookDetails from "./BookDetails";

import { useQuery } from "@apollo/client";
import { getAllBooks } from "../graphql-client/queries";

const BookList = () => {
  const [bookSelected, setBookSelected] = useState(null);

  const { loading, error, data } = useQuery(getAllBooks);
  if (loading) {
    return <p>Loading books...</p>;
  }
  if (error) {
    return <p>Error loading books!</p>;
  }

  return (
    <Row>
      <Col xs={8}>
        <Row>
          {data.books.map((book) => (
            <Card
              style={{ width: "18rem" }}
              border="info"
              text="info"
              className="text-center shadow"
              key={book.id}
              onClick={setBookSelected.bind(this, book.id)}
            >
              <Card.Body>{book.title}</Card.Body>
            </Card>
          ))}
        </Row>
      </Col>
      <Col>
        <BookDetails bookId={bookSelected} />
      </Col>
    </Row>
  );
};

export default BookList;
