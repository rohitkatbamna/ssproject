import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contactuspage from './pages/contactpage';
import Landingpage from './pages/landingpage';
import Reviewspage from './pages/reviewspage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Landingpage />} exact/>
          <Route path='/reviews' element={<Reviewspage />}/>
          <Route path='/contactus' element={<Contactuspage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
