import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Home from './Components/home';
import ViewProject from './Components/viewproject';
import ContactMe from './Components/contactme';
import Gallery from './Components/gallery';
import Certification from './Components/certification';
import Achievement from './Components/achivement';
// Remove the missing imports
// import BloomHabit from './Components/bloomHabit';
// import MedicalPortal from './Components/medicalPortal';
// import AnimalPlant from './Components/animalPlant';
// import Fitme from './Components/fitme';
// import Farm from './Components/farm';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<ViewProject />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certifications" element={<Certification />} />
          <Route path="/achievements" element={<Achievement />} />
          {/* Remove the project detail routes until you create the components */}
          {/* <Route path="/bloomHabit" element={<BloomHabit />} />
          <Route path="/medicalPortal" element={<MedicalPortal />} />
          <Route path="/animalPlant" element={<AnimalPlant />} />
          <Route path="/fitme" element={<Fitme />} />
          <Route path="/farm" element={<Farm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;