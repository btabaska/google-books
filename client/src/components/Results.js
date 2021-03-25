import React from "react";
import BookContainer from "./bookContainer/BookContainer";
import { Container } from "@material-ui/core";
const Results = ({ searchResults }) => {
  return (
    <Container>
      {searchResults !== undefined
        ? searchResults.map((book, index) => (
            <BookContainer
              props={book.volumeInfo}
              key={index + book.volumeInfo.title}
              mode={"search"}
            />
          ))
        : void [0]}
    </Container>
  );
};

export default Results;
