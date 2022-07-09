import React from "react";
import { Card } from "react-bootstrap";

const BookDetails = () => {
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        <Card.Title>Cowboy Bebop</Card.Title>
        <Card.Subtitle>Cowboy Bebop</Card.Subtitle>
        <p>Cowboy Bebop</p>
        <p>Cowboy Bebop</p>
        <p>All books by this author:</p>
        <ul>
          <li>Cowboy Bebop</li>
          <li>Cowboy Bebop</li>
          <li>Cowboy Bebop</li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
