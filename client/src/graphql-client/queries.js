import { gql } from "@apollo/client";

const getAllBooks = gql`
  query getAllBooksQuery {
    books {
      id
      title
      genre
    }
  }
`;

const getSingleBook = gql`
  query getSingleBookQuery($id: ID!) {
    book(id: $id) {
      id
      title
      genre
      author {
        id
        name
        born
        books {
          id
          title
        }
      }
    }
  }
`;

const getAllAuthors = gql`
  query getAllAuthorsQuery {
    authors {
      id
      name
    }
  }
`;

export { getAllBooks, getSingleBook, getAllAuthors };
