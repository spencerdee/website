
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
                <Route path='/website' element={<Home />} />
                <Route path='/website/calculator' element={<Calculator />} />
                <Route path='/website/gym' element={<Gym />} />
            </Routes>
        </Router>
    );
}

export default App;