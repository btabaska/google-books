import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getBooks } from "../../utils/API";
import BookContainer from "../bookContainer/BookContainer";

const Saved = () => {
  const [AllBooks, setAllBooks] = useState([]);
  useEffect(() => {
    getBooks().then((array) => setAllBooks(array));
  }, [AllBooks]);
  return (
    <div>
      <Container>
        {AllBooks.map((book, index) => (
          <BookContainer props={book} key={index + book.title} />
        ))}
      </Container>
    </div>
  );
};

export default Saved;
