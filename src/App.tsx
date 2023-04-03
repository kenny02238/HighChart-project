import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomePage, ErrorPage, DataPage } from './components/pages';
import { DropDownProvider } from './store/contexts/DropDownProvider';
import { ChartProvider } from './store/contexts/ChartProvider';

function App() {
  return (
    <Router>
      <ChartProvider>
        <DropDownProvider>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/bigdata-pretest" element={<HomePage />} />
            <Route path="/bigdata-pretest/:year/:county/:district" element={<DataPage />} />
          </Routes>
        </DropDownProvider>
      </ChartProvider>

    </Router>
  );
}

export default App;
