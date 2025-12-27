import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar';
import Footer from './Components/footer';
import Home from './Components/home';
import About from './Components/about';
import Skills from './Components/skills';
import ViewProject from './Components/viewproject';
import ContactMe from './Components/contactme';
import Certification from './Components/certification';
import BloomHabit from './Components/bloomHabit';
import MedicalPortal from './Components/medicalPortal';
import AnimalPlant from './Components/animalPlant';
import Fitme from './Components/fitme';
import Farm from './Components/farm';
import CakeShop from './Components/cakeShop';
import VehicleSpire from './Components/vehicleSpire';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<ViewProject />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/certifications" element={<Certification />} />
            {/* Project Detail Routes */}
            <Route path="/bloomHabit" element={<BloomHabit />} />
            <Route path="/medicalPortal" element={<MedicalPortal />} />
            <Route path="/animalPlant" element={<AnimalPlant />} />
            <Route path="/fitme" element={<Fitme />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/cakeShop" element={<CakeShop />} />
            <Route path="/vehicleSpire" element={<VehicleSpire />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
