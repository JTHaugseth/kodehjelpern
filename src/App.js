import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="d-flex">
          <Sidebar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/task1" element={<MainContent />} />
              <Route path="/task2" element={<MainContent />} />
              <Route path="/task3" element={<MainContent />} />
              <Route path="/task4" element={<MainContent />} />
              <Route path="/task5" element={<MainContent />} />
              <Route path="/css-task1" element={<MainContent />} />
              <Route path="/css-task2" element={<MainContent />} />
              <Route path="/css-task3" element={<MainContent />} />
              <Route path="/css-task4" element={<MainContent />} />
              <Route path="/css-task5" element={<MainContent />} />
              <Route path="/css-task6" element={<MainContent />} />
              <Route path="/css-task7" element={<MainContent />} />
              <Route path="/css-task8" element={<MainContent />} />
              <Route path="/css-task9" element={<MainContent />} />
              <Route path="/css-task10" element={<MainContent />} />
              <Route path="/contact" element={<div>Contact Me</div>} />
              <Route path="/" element={<MainContent />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;