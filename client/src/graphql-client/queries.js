import { gql } from "@apollo/client";

const getAllBooks = gql`
  query getBooksQuery {
    books {
      id
      title
      genre
    }
  }
`;

export { getAllBooks };
