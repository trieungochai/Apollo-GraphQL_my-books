const { gql } = require("@apollo/client");

const addSingleBook = gql`
  mutation addSingleBookMutation(
    $title: String!
    $genre: String!
    $authorId: ID!
  ) {
    createBook(title: $title, genre: $genre, authorId: $authorId) {
      id
      title
      genre
    }
  }
`;

module.exports = { addSingleBook };
