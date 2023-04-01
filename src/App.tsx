import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage, ErrorPage } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/bigdata-pretest" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
