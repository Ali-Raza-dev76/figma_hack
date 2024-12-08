'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Homepage';
import Products from './Productpage';
import Singleproduct from './components/singleproduct';


const App: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the router only renders on the client-side.
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing or a loader while SSR is happening
  }

  return (
    <Router>
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/SingleProduct" element={<Singleproduct/>} />
        </Routes>
      </div>
      
    </Router>
  );
};

export default App;
