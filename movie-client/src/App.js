import "./App.css";
import { useGetMovies } from "./api/hooks";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () =>
    await useGetMovies().then((data) => setMovies(data));

  useEffect(() => {
    getMovies();
  }, []);

  console.log("MOVIES", movies);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Layout}></Route>
      </Routes>
    </div>
  );
}

export default App;
