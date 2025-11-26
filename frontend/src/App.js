import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import ViewProject from './Components/viewproject';
import ContactMe from './Components/contactme';
import Gallery from './Components/gallery';
import Certification from './Components/certification';
import Achievement from './Components/achivement';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-100 dark:bg-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ViewProject />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/achievements" element={<Achievement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;