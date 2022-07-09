import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import Forms from "./components/Forms";

const App = () => {
  return (
    <Container className="py-3 mt-3" style={{ backgroundColor: "lightcyan" }}>
      <h1 className="text-center text-info mb-3">My Books</h1>
      <hr />
      <Forms />
      <hr />
      <BookList />
    </Container>
  );
};

export default App;
