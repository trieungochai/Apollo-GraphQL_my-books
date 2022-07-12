import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { getAllAuthors } from "../graphql-client/queries";

const Forms = () => {
  const { loading, error, data } = useQuery(getAllAuthors);
  if (error) {
    console.log(error.message);
    return <p>Error loading authors!</p>;
  }
  console.log("🚀 ~ file: Forms.js ~ line 9 ~ Forms ~ data", data);

  return (
    <Row>
      <Col>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Book title" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" placeholder="Book genre" />
          </Form.Group>
          <Form.Group>
            {loading ? (
              <p>Loading authors....</p>
            ) : (
              <Form.Select type="select" defaultValue="Select author">
                <option disabled>Select author</option>
                {data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </Form.Select>
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
