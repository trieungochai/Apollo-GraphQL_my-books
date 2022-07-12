import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";
import { getAllAuthors } from "../graphql-client/queries";
import { addSingleBook } from "../graphql-client/mutations";

const Forms = () => {
  const [newBook, setNewBook] = useState({
    title: "",
    genre: "",
    authorId: "",
  });

  const { title, genre, authorId } = newBook;

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(newBook);
    addBook({
      title,
      genre,
      authorId,
    });

    // Clear form inputs after submission
    setNewBook({ title: "", genre: "", authorId: "" });
  };

  // GraphQL operations
  const { loading, error, data } = useQuery(getAllAuthors);
  const { addBook, dataMutation } = useMutation(addSingleBook);
  if (error) {
    console.log(error.message);
    return <p>Error loading authors!</p>;
  }

  console.log(
    "🚀 ~ file: Forms.js ~ line 35 ~ Forms ~ dataMutation",
    dataMutation
  );
  console.log("🚀 ~ file: Forms.js ~ line 35 ~ Forms ~ addBook", addBook);

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
              value={title}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Book genre"
              name="genre"
              onChange={onInputChange}
              value={genre}
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
                value={authorId}
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
