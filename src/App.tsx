import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RegisterInterest from './pages/RegisterInterest';
import CursorEffect from './components/CursorEffect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <CursorEffect />
        <Navbar />
        <main className="w-[99vw]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register-interest" element={<RegisterInterest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
