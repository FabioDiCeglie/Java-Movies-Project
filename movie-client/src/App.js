import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Trailer from "./components/trailer/Trailer";
import Reviews from "./components/reviews/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
          <Route path="/reviews/:movieId" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
