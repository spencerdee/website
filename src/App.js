
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Gym from './Gym';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/calculator' element={<Calculator />} />
                <Route path='/gym' element={<Gym />} />
            </Routes>
        </Router>
    );
}

export default App;