import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import HowitWorks from './components/HowitWorks';
import Feedback from './components/Feedback';
import Login from './components/Login';
import Signup from './components/Signup';
import Upgrade from './components/Upgrade';

function App() {
  return (
    <Router>
      <div className="Airforshare">
        <Header />
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="/how-it-works" element={<HowitWorks />} />
          <Route path="/Feedback" element={<Feedback/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Upgrade" element={<Upgrade/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
