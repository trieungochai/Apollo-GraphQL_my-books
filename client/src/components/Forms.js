import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const Forms = () => {
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
            <Form.Select type="select" defaultValue="Select author">
              <option disabled>Select author</option>
            </Form.Select>
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
