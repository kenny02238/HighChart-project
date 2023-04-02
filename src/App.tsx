import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage, ErrorPage } from './components/pages';
import { DropDownProvider } from './store/contexts/DropDownProvider';

function App() {
  return (
    <Router>
      <DropDownProvider>
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/bigdata-pretest" element={<HomePage />} />
        </Routes>
      </DropDownProvider>
    </Router>
  );
}

export default App;
