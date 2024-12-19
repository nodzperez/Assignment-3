import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar.tsx";
import "./App.css";
import { Auth } from "./pages/auth/index.tsx";
import { Home } from "./pages/home/index.tsx";
import { TvShow } from "./pages/tvshow/index.tsx";
import { Movie } from "./pages/movie/index.tsx";
import { Rated } from "./pages/rated/index.tsx";

function App() {
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/rated" element={<Rated />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/tvshow/:id" element={<TvShow />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
