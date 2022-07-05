import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './presentation/pages/home/Home';
import NotFound from './presentation/pages/notFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
