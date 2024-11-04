
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer'; 
// import About from './Pages/About'; 
// import Home from './Pages/Home'; 
// import Services from './Pages/Services'; 
// import Contact from './Pages/Contact'; 
// import Gallery from './Pages/Gallery';

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/gallery" element={<Gallery />} />
//       </Routes>
//       <Footer /> 
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'; // Import the Footer component
import About from './Pages/About'; 
import Home from './Pages/Home'; 
import Services from './Pages/Services'; 
import Contact from './Pages/Contact'; 
import Gallery from './Pages/Gallery';
import AppointmentForm from './Components/Home/AppointmentForm/AppointmentForm'; // Import AppointmentForm
import Conditions from './Pages/Conditions';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/conditions" element={<Conditions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/appointment" element={<AppointmentForm />} /> {/* Added route for AppointmentForm */}
      </Routes>
      <Footer /> {/* Add Footer here */}
    </Router>
  );
};

export default App;
