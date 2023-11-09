import React from 'react';
import Header from './Component/Header';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
