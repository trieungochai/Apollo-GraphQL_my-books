import React from "react";
import { Card } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { getSingleBook } from "../graphql-client/queries";

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(getSingleBook, {
    variables: {
      id: bookId,
    },
  });
  if (loading) {
    return <p>Loading book details...</p>;
  }
  if (bookId !== null && error) {
    return <p>Error loading book details!</p>;
  }
  console.log("🚀 ~ file: BookDetails.js ~ line 9 ~ BookDetails ~ data", data);

  const book = !loading && !error ? data.book : null;

  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {book === null ? (
          <Card.Text>Please select a book!</Card.Text>
        ) : (
          <>
            <Card.Title>{book.title}</Card.Title>
            <Card.Subtitle>by {book.author.name}</Card.Subtitle>
            <p>Genre: {book.genre}</p>
            <p>All books by this author:</p>
            <ul>
              {book.author.books.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
