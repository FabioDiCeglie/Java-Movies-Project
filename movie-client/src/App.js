import "./App.css";
import { useGetMovies } from "./api/hooks";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";

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
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
