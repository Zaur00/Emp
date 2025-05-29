// 📁 src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import DataProvider from './Context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
