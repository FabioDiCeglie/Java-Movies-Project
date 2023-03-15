import "./App.css";
import { useGetMovies } from "./api/hooks";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () =>
    await useGetMovies().then((data) => setMovies(data));

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
