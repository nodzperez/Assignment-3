import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { NavBar } from './components/NavBar.tsx'
import './App.css'
import { Auth } from './pages/auth/index.tsx';

function App() {
  
  return (
    <>
      <div>
        <Router>
          <NavBar />
          <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<h1>Rated Page</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
