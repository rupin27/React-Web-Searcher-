import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import MovieView from "./components/MovieView";
import { Routes, Route } from "react-router-dom";

//DOB API: f025761f17e2fb13919e141c0368e238
//sample request:
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f025761f17e2fb13919e141c0368e238&language=en-US&query=${searchText}&page=1)`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/search"
          element={<SearchView id={searchText} searchResults={searchResults} />}
        />
        <Route exact path="/movies/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}

export default App;
