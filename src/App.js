
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home/home';
import Contact from './Components/Contact/contact'
import History from './Components/History/history';
import EarlyBronzeAge from './Components/History/Early-Bronze-Age/earlyBronzeAge';
import BronzeAge from './Components/History/Bronze-Age/bronzeAge';
import IronAge from './Components/History/Iron-Age/ironAge';
import ClassicalAge from './Components/History/Classical-Age/classicalAge';
import MiddleAges from './Components/History/Middle-Ages/middleAges';
import ModernPeriod from './Components/History/Modern-Period/modernPeriod';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/history" element={<History />} />
          <Route exact path="/Early-Bronze-Age" element={<EarlyBronzeAge />} />
          <Route exact path="/Bronze-Age" element={<BronzeAge />} />
          <Route exact path="/Iron-Age" element={<IronAge />} />
          <Route exact path="/Classical-Age" element={<ClassicalAge />} />
          <Route exact path="/Middle-Ages" element={<MiddleAges />} />
          <Route exact path="/Modern-Period" element={<ModernPeriod />} />
      </Routes>
    </Router>
  );
}

export default App;
