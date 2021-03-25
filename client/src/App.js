import "./App.css";
import React, { useEffect, useState } from "react";
import Nav from "./components/NavBar/Nav";
import { Router } from "@reach/router";
import Saved from "./components/Saved/Saved";
import { getSearch } from "./utils/API";
import Results from "./components/Results";

function App() {
  const [searchTerm, setSearchTerm] = useState("1984");
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearch(searchTerm).then((array) => setSearchResults(array));
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);
  return (
    <div>
      <Nav setSearchTerm={setSearchTerm} />

      <Router>
        <Results searchResults={searchResults} path="/" />
        <Saved path="/saved" />
      </Router>
    </div>
  );
}

export default App;
