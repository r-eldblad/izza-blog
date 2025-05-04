import './App.css';
import Navbar from './components/navbar/navbar';
import HomePage from './pages/homepage/homepage';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/loginpage';

const App = () => {
  return (
    <div className="content">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
