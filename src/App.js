import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactuspage from './pages/contactpage';
import Landingpage from './pages/landingpage';
import Reviewspage from './pages/reviewspage';
import Parispage from './pages/parispage';
import Barcelonapage from './pages/barcelonapage';
import Bangkokpage from './pages/bangkokpage';
import Losangelespage from './pages/losangelespage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} exact/>
          <Route path='/reviews' element={<Reviewspage />}/>
          <Route path='/contactus' element={<Contactuspage />}/>
          <Route path='/paris' element={<Parispage />}/>
          <Route path='/barcelona' element={<Barcelonapage />}/>
          <Route path='/bangkok' element={<Bangkokpage />}/>
          <Route path='/losangeles' element={<Losangelespage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
