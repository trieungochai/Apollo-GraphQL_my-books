import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { getAllAuthors } from "../graphql-client/queries";

const Forms = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    genre: "",
    authorId: "",
  });

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newBook);
  };

  const { loading, error, data } = useQuery(getAllAuthors);
  if (error) {
    console.log(error.message);
    return <p>Error loading authors!</p>;
  }

  return (
    <Row>
      <Col>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Book title"
              name="title"
              onChange={onInputChange}
              value={newBook.title}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Book genre"
              name="genre"
              onChange={onInputChange}
              value={newBook.genre}
            />
          </Form.Group>
          <Form.Group>
            {loading ? (
              <p>Loading authors....</p>
            ) : (
              <Form.Control
                as="select"
                name="authorId"
                onChange={onInputChange}
                value={newBook.authorId}
              >
                <option value="" disabled>
                  Select author
                </option>
                {data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </Form.Control>
            )}
          </Form.Group>
          <Button className="float-right" variant="info" type="submit">
            Add book
          </Button>
        </Form>
      </Col>
      <Col>
        <Form>
          <Form.Group className="invisible">
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Author name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="number" placeholder="Born" />
          </Form.Group>
          <Button className="float-right" variant="info" type="submit">
            Add author
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Forms;
