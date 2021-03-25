import axios from "axios";

export async function getBooks() {
  const response = await axios.get("/api/books");
  return response.data;
}

export async function getSearch(searchTerm) {
  const response = await axios.get("/api/search", {
    params: { searchParam: searchTerm },
  });
  return response.data.items;
}

export async function addBook(bookData) {
  console.log(bookData);
  const response = await axios.post("/api/books", {
    title: bookData.title,
    subtitle: bookData.subtitle,
    authors: bookData.authors,
    publisher: bookData.publisher,
    publishedDate: bookData.publishedDate,
    description: bookData.description,
    image: bookData.imageLinks.thumbnail,
    link: bookData.infoLink,
  });
  return response.data;
}

export async function deleteBook(id) {
  const response = await axios.delete("/api/books", {
    data: {
      _id: id,
    },
  });
  return response.data;
}
