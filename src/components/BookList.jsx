import React from "react";
import { Container} from "react-bootstrap";
import books from "../data/fantasy.json"

class BookList extends React.Component {
  render() {
    return (
      <Container>
          {books.map(book => 
          <img src={book.img} style={{width:"200px"}} />
        //   <SingleBook key={book.asin} book={book} />)
          )}
      </Container>
    );
  }
}

export default BookList;